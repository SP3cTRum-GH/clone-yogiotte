package com.ygcc.yogiotte.repository;

import com.ygcc.yogiotte.domain.Auth;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AuthRepository extends JpaRepository<Auth, Integer> {
    Optional<Auth> findByAuthName(String authName);
}
