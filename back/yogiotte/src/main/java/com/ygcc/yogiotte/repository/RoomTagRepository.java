package com.ygcc.yogiotte.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ygcc.yogiotte.entity.RoomTag;
import com.ygcc.yogiotte.entity.RoomTagId;

public interface RoomTagRepository extends JpaRepository<RoomTag, RoomTagId> {}

