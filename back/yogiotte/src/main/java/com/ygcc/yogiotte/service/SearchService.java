package com.ygcc.yogiotte.service;

import com.ygcc.yogiotte.dto.AccommodationDTO;
import com.ygcc.yogiotte.dto.SearchRequestDTO;

import java.util.List;

public interface SearchService {

    List<AccommodationDTO> search(SearchRequestDTO searchRequest) throws Exception;

}
