package com.ygcc.yogiotte.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ygcc.yogiotte.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {}
