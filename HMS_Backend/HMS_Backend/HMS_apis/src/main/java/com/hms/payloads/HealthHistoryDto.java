package com.hms.payloads;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
//@JsonInclude(value = Include.NON_NULL)
public class HealthHistoryDto {

	private int id;

	private String diseases;

	private LocalDate appointmentDate;

	private LocalTime appointmentTime;

	private Boolean paymentStatus;

	private String allocatedBed;

	private double paidAmount;

	@NotEmpty
	@Size(min = 5, message = "firstname must be min of 5 characters")
	private String symptoms;

	private LocalDate admitDate;

	@NotBlank
	@Size(min = 50, message = "min size of Health_History  desc is 50")
	private String prescriptionInstruction;

	private LocalDate dischargeDate;

	private LocalDate paymentDate;

	@JsonIgnoreProperties(value = "health_history")
	private PatientDto patient;

	@JsonIgnoreProperties(value = "healthHistory")
	private List<MedicineDto> medicines = new ArrayList<>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDiseases() {
		return diseases;
	}

	public void setDiseases(String diseases) {
		this.diseases = diseases;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public LocalTime getAppointmentTime() {
		return appointmentTime;
	}

	public void setAppointmentTime(LocalTime appointmentTime) {
		this.appointmentTime = appointmentTime;
	}

	public Boolean getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(Boolean paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public String getAllocatedBed() {
		return allocatedBed;
	}

	public void setAllocatedBed(String allocatedBed) {
		this.allocatedBed = allocatedBed;
	}

	public double getPaidAmount() {
		return paidAmount;
	}

	public void setPaidAmount(double paidAmount) {
		this.paidAmount = paidAmount;
	}

	public String getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}

	public LocalDate getAdmitDate() {
		return admitDate;
	}

	public void setAdmitDate(LocalDate admitDate) {
		this.admitDate = admitDate;
	}

	public String getPrescriptionInstruction() {
		return prescriptionInstruction;
	}

	public void setPrescriptionInstruction(String prescriptionInstruction) {
		this.prescriptionInstruction = prescriptionInstruction;
	}

	public LocalDate getDischargeDate() {
		return dischargeDate;
	}

	public void setDischargeDate(LocalDate dischargeDate) {
		this.dischargeDate = dischargeDate;
	}

	public LocalDate getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}

	public PatientDto getPatient() {
		return patient;
	}

	public void setPatient(PatientDto patient) {
		this.patient = patient;
	}

	public List<MedicineDto> getMedicines() {
		return medicines;
	}

	public void setMedicines(List<MedicineDto> medicines) {
		this.medicines = medicines;
	}
}