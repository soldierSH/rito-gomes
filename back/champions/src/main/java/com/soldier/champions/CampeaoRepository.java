package com.soldier.champions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.soldier.champions.model.Campeao;

@Repository
public interface CampeaoRepository extends JpaRepository<Campeao, Integer> {

}