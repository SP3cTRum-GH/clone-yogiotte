package com.ygcc.yogiotte.entity;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;

@Embeddable
public class ItemTagId implements Serializable {

    private Long item;
    private String tag;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ItemTagId)) return false;
        ItemTagId that = (ItemTagId) o;
        return Objects.equals(item, that.item) && Objects.equals(tag, that.tag);
    }

    @Override
    public int hashCode() {
        return Objects.hash(item, tag);
    }
}

