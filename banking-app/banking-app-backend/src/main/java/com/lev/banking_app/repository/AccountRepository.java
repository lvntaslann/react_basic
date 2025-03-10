package com.lev.banking_app.repository;

import com.lev.banking_app.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository  extends JpaRepository<Account,Long> {

}
