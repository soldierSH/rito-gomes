package com.soldier.champions;

import org.springframework.data.jpa.repository.JpaRepository;

import com.soldier.champions.model.Campeao;

public interface CampeaoRepository extends JpaRepository<Campeao, Integer> {

}