package com.ygcc.yogiotte.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ygcc.yogiotte.entity.ItemTag;
import com.ygcc.yogiotte.entity.ItemTagId;

public interface ItemTagRepository extends JpaRepository<ItemTag, ItemTagId> {}

