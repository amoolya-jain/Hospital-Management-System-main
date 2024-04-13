package com.hms.payloads;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@JsonInclude(value = Include.NON_NULL)
public class WardDto {

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getWardType() {
		return wardType;
	}

	public void setWardType(String wardType) {
		this.wardType = wardType;
	}

	public Double getWardCharges() {
		return wardCharges;
	}

	public void setWardCharges(Double wardCharges) {
		this.wardCharges = wardCharges;
	}

	public Set<PatientDto> getPatients() {
		return patients;
	}

	public void setPatients(Set<PatientDto> patients) {
		this.patients = patients;
	}

	private Integer id;

	private String wardType;

	private Double wardCharges;

	@JsonIgnoreProperties(value = "ward")
	private Set<PatientDto> patients = new HashSet<>();
}