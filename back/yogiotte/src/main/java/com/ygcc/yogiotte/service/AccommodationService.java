package com.ygcc.yogiotte.service;

import com.ygcc.yogiotte.dto.AccommodationDTO;
import java.util.List;

public interface AccommodationService {

    AccommodationDTO createAccommodation(AccommodationDTO accommodationDTO) throws Exception;

    AccommodationDTO getAccommodationById(Long accommodationId) throws Exception;

    List<AccommodationDTO> getAllAccommodations() throws Exception;

    void updateAccommodation(Long accommodationId, AccommodationDTO accommodationDTO) throws Exception;

    void deleteAccommodation(Long accommodationId) throws Exception;
}
