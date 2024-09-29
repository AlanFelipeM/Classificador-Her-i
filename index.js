// Função para exibir uma saudação personalizada com efeitos
function saudacaoHeroi(nome) {
  console.log(`\n*** 🌟 Herói ${nome}, sua jornada começa agora! 🌟 ***`);
}

// Função para calcular o nível do herói baseado em sua XP
function calcularNivel(xp) {
  if (xp < 1000) {
      return "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
      return "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
      return "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
      return "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
      return "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
      return "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
      return "Imortal";
  } else {
      return "Radiante";
  }
}

// Função para simular o ganho de XP com uma mensagem personalizada
function ganharXP(atualXP, ganhoXP) {
  let novaXP = atualXP + ganhoXP;
  console.log(`🟢 Você derrotou o inimigo! Ganhou +${ganhoXP} XP.`);
  console.log(`⚔️ Nova experiência total: ${novaXP} XP!`);
  return novaXP;
}

// Função para simular a perda de XP com uma mensagem personalizada
function perderXP(atualXP, perdaXP) {
  let novaXP = atualXP - perdaXP;
  if (novaXP < 0) novaXP = 0; // XP não pode ser negativa
  console.log(`🔴 Você foi derrotado... Perdeu -${perdaXP} XP.`);
  console.log(`⚔️ Nova experiência total: ${novaXP} XP.`);
  return novaXP;
}

// Função para simular uma batalha com mensagens dramáticas
function batalhar(nome, xp) {
  console.log(`\n⚔️ O herói ${nome} enfrenta uma criatura monstruosa! ⚔️`);
  
  // Resultado aleatório da batalha (0 = derrota, 1 = vitória)
  let resultado = Math.random() < 0.5 ? "derrota" : "vitória";

  if (resultado === "vitória") {
      console.log("🎉 Vitória! Você derrotou seu adversário em uma batalha épica!");
      return ganharXP(xp, Math.floor(Math.random() * 500 + 200)); // Ganha entre 200 e 500 XP
  } else {
      console.log("💥 Derrota! Você foi superado pela criatura...");
      return perderXP(xp, Math.floor(Math.random() * 300 + 100)); // Perde entre 100 e 300 XP
  }
}

// Função principal que exibe todas as informações com mais estilo
function exibirInformacoesHeroi(nome, xp) {
  saudacaoHeroi(nome); // Saudação personalizada
  let nivel = calcularNivel(xp); // Calcula o nível baseado na XP
  console.log(`🛡️ O herói ${nome} possui ${xp} XP e alcançou o nível: ${nivel}!`);
  console.log("🔥 Continue batalhando para alcançar a glória máxima! 🔥");
}


let nomeHeroi = "Thor";
let xpHeroi = 7200;

// Exibe informações atuais do herói
exibirInformacoesHeroi(nomeHeroi, xpHeroi);

// Simular uma batalha
xpHeroi = batalhar(nomeHeroi, xpHeroi);

// Exibe informações após a batalha
exibirInformacoesHeroi(nomeHeroi, xpHeroi);
