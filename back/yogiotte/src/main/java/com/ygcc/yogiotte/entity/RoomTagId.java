package com.ygcc.yogiotte.entity;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;

@Embeddable
public class RoomTagId implements Serializable {

    private Long room;
    private String tag;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RoomTagId)) return false;
        RoomTagId that = (RoomTagId) o;
        return Objects.equals(room, that.room) && Objects.equals(tag, that.tag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(room, tag);
    }
}

