package com.ygcc.yogiotte.service;

import com.ygcc.yogiotte.dto.ReservationDTO;
import java.util.List;

public interface ReservationService {

    ReservationDTO createReservation(ReservationDTO reservationDTO) throws Exception;

    List<ReservationDTO> getReservationsByRoomId(Long roomId) throws Exception;

    void cancelReservation(Long reservationId) throws Exception;

}
