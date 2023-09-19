package com.soldier.champions;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.soldier.champions"}) // Adicione o pacote do CampeaoRepository
public class ChampionsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChampionsApplication.class, args);
	}

}
