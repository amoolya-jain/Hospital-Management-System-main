package com.hms.payloads;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
//@JsonInclude(value = Include.NON_NULL)
public class PatientDto {

	private Integer id;

	private Boolean admitStatus;

	private Boolean currentStatus;

	@JsonIgnoreProperties(value = "patient")
	private UserDto user;

	@JsonIgnoreProperties(value = "patients")
	private DoctorDto doctor;

	@JsonIgnoreProperties(value = "patients")
	private WardDto ward;

	@JsonIgnoreProperties(value = "patient")
	private List<HealthHistoryDto> health_history = new ArrayList<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Boolean getAdmitStatus() {
		return admitStatus;
	}

	public void setAdmitStatus(Boolean admitStatus) {
		this.admitStatus = admitStatus;
	}

	public Boolean getCurrentStatus() {
		return currentStatus;
	}

	public void setCurrentStatus(Boolean currentStatus) {
		this.currentStatus = currentStatus;
	}

	public UserDto getUser() {
		return user;
	}

	public void setUser(UserDto user) {
		this.user = user;
	}

	public DoctorDto getDoctor() {
		return doctor;
	}

	public void setDoctor(DoctorDto doctor) {
		this.doctor = doctor;
	}

	public WardDto getWard() {
		return ward;
	}

	public void setWard(WardDto ward) {
		this.ward = ward;
	}

	public List<HealthHistoryDto> getHealth_history() {
		return health_history;
	}

	public void setHealth_history(List<HealthHistoryDto> health_history) {
		this.health_history = health_history;
	}
}
