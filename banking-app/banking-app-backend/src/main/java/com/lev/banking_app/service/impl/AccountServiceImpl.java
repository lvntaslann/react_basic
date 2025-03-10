package com.lev.banking_app.service.impl;

import com.lev.banking_app.dto.AccountDto;
import com.lev.banking_app.entity.Account;
import com.lev.banking_app.mapper.AccountMapper;
import com.lev.banking_app.repository.AccountRepository;
import com.lev.banking_app.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public AccountServiceImpl(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public AccountDto createAccount(AccountDto accountDto) {
        Account account = AccountMapper.mapToAccount(accountDto);
        Account savedAccount = accountRepository.save(account);
        return AccountMapper.mapToAccountDto(savedAccount);
    }

    @Override
    public AccountDto getAccountById(Long id) {
       Account account = accountRepository.findById(id).orElseThrow(()-> new RuntimeException("Account does not exists"));
       return AccountMapper.mapToAccountDto(account);
    }

    @Override
    public AccountDto deposit(Long id, double amount) {
        Account account = accountRepository.findById(id).orElseThrow(()-> new RuntimeException("Account does not exists"));
        double total = account.getBalance() + amount;
        account.setBalance(total);
        Account savedAccount = accountRepository.save(account);
        return AccountMapper.mapToAccountDto(savedAccount);
    }

    @Override
    public AccountDto withDraw(Long id, double amount) {
        Account account = accountRepository.findById(id).orElseThrow(()-> new RuntimeException("Account does not exists"));
        if(account.getBalance()<amount){
            throw new RuntimeException("Insuffient amount");
        }

        double total = account.getBalance() - amount;
        account.setBalance(total);
        Account savedAccount = accountRepository.save(account);

        return AccountMapper.mapToAccountDto(savedAccount);
    }

    @Override
    public List<AccountDto> getAllAcounts() {
        List<Account> accounts = accountRepository.findAll();
        return accounts.stream().map((account)-> AccountMapper.mapToAccountDto(account)).collect(Collectors.toList());
    }

    @Override
    public void deleteAccount(Long id) {
        Account account = accountRepository.findById(id).orElseThrow(()-> new RuntimeException("Account does not exists"));
        accountRepository.deleteById(id);
    }
}
