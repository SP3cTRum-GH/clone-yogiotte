package com.ygcc.yogiotte.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class AccommodationDTO {
    private Long id;
    private String name;
    private String address;
    private String description;
    private boolean isInternational;
    private List<RoomDTO> rooms;
}
