package com.ygcc.yogiotte.service;

import com.ygcc.yogiotte.dto.RoomDTO;
import java.util.List;

public interface RoomService {
    // Room 생성 (입력은 DTO, 반환도 DTO)
    RoomDTO createRoom(RoomDTO roomDTO) throws Exception;

    // Room 단일 조회
    RoomDTO getRoomById(Long roomId) throws Exception;

    // Room 전체 조회
    List<RoomDTO> getAllRooms() throws Exception;

    // Room 수정
    void updateRoom(Long roomId, RoomDTO roomDTO) throws Exception;

    // Room 삭제
    void deleteRoom(Long roomId) throws Exception;
}
