package com.ticketone.controller.dto;

import java.io.Serializable;

public class StatisticsDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer solved;
    private Integer unsolved;

	public Integer getSolved() {
		return solved;
    }
    
	public void setSolved(Integer solved) {
		this.solved = solved;
    }
    
	public Integer getUnsolved() {
		return unsolved;
    }
    
	public void setUnsolved(Integer unsolved) {
		this.unsolved = unsolved;
	}
}
