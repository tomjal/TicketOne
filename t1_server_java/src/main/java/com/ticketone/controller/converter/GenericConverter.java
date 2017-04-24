package com.ticketone.controller.converter;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public interface GenericConverter<E, D, T> {
    public D toDto(E obj);

    public E fromDto(D dto, T obj);

    default List<D> toDtosList(final Collection<E> entities) {
        return entities.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }
}
