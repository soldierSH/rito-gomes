package com.soldier.champions.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.soldier.champions.model.Campeao;
import com.soldier.champions.repository.CampeaoRepository;


@RestController
@RequestMapping("/api/champions")
public class ChampionController {
    private final CampeaoRepository repository;
    public ChampionController(CampeaoRepository repository) {
        this.repository = repository;
    }
    @GetMapping
    @ResponseBody
    public List<Campeao> list(){
        List<Campeao> champions = repository.findAll();
        return champions;
    }

}
  