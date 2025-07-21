package com.ygcc.yogiotte.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignupDTO {
	private String memId;
    private String memPw;
    private String email;
    private String phone;
    private String oauthType;
	private String oauthId;
}
