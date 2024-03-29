package com.hms.entities;

import org.springframework.data.annotation.Transient;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document("resources")
public class Resources {

    @Transient
    public static final String SEQUENCE_NAME = "resource_sequence";
    
	@Id
	private int id;

	private String resource_name;

	private int total_quantity;

	private int occupy_quantity;

	private int remaining_quantity;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getResource_name() {
		return resource_name;
	}

	public void setResource_name(String resource_name) {
		this.resource_name = resource_name;
	}

	public int getTotal_quantity() {
		return total_quantity;
	}

	public void setTotal_quantity(int total_quantity) {
		this.total_quantity = total_quantity;
	}

	public int getOccupy_quantity() {
		return occupy_quantity;
	}

	public void setOccupy_quantity(int occupy_quantity) {
		this.occupy_quantity = occupy_quantity;
	}

	public int getRemaining_quantity() {
		return remaining_quantity;
	}

	public void setRemaining_quantity(int remaining_quantity) {
		this.remaining_quantity = remaining_quantity;
	}

	public static String getSequenceName() {
		return SEQUENCE_NAME;
	}
}