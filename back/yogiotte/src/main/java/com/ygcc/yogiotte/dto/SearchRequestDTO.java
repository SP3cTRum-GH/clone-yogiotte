package com.ygcc.yogiotte.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Getter
@Setter
@ToString
public class SearchRequestDTO {

    private String location; // 지역 (주소 또는 이름)

    private Boolean isInternational; // 국내/해외 여부

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkInDate;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate checkOutDate;

    private Integer adults; // 성인 수

    private Integer children; // 아동 수

    private Integer numberOfRooms; // 객실 수
}
