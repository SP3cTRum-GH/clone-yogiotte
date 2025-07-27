package com.ygcc.yogiotte.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@ToString
public class RoomDTO {
    private Long id;
    private Long accommodationId;
    private String name;
    private String description;
    private Integer price;
    private Integer capacity;
    private LocalDateTime createdDate;
    private List<ImageDTO> images;
    private List<String> roomTags; // 태그는 이름만 필요하므로 String 리스트로 처리
}
