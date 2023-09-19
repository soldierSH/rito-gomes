package com.soldier.champions;


import com.soldier.champions.model.Campeao;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



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
  