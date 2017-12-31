package com.ticketone.controller.dto;

import java.io.Serializable;

public class StatisticsDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer solved;
    private Integer unsolved;
	/**
	 * @return the solved
	 */
	public Integer getSolved() {
		return solved;
	}
	/**
	 * @param solved the solved to set
	 */
	public void setSolved(Integer solved) {
		this.solved = solved;
	}
	/**
	 * @return the unsolved
	 */
	public Integer getUnsolved() {
		return unsolved;
	}
	/**
	 * @param unsolved the unsolved to set
	 */
	public void setUnsolved(Integer unsolved) {
		this.unsolved = unsolved;
	}
}
