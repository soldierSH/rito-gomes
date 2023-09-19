package com.soldier.champions.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="campeoes")
public class Campeao {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(length=100,nullable = false)
    private String name;

    @Column(length=255, nullable = false)
    private String subtitulo;

    @Column(length=50, nullable = false)
    private String funcao;

    @Column(length=20, nullable = false)
    private String dificuldade;

    @Column
    private String texto;

    @Column(length=255, nullable = false)
    private String imagem;

    @Column(length=250)
    private String link;

    @Column(length=250)
    private String linklore;

    @Column(length=100)
    private String regiao;
}
