
        const clientesComErp = {
            "Halave Confecções": {erp: "812164", cidade: "Blumenau", estado: "SC"},
            "Filt Surf Wear": {erp: "45981", cidade: "Blumenau", estado: "SC"},
            "Miss Bel": {erp: "813702", cidade: "São Paulo", estado: "SP"},
            "Grendene": {erp: "493090", cidade: "Fortaleza", estado: "CE"},
            "Vulcabras": {erp: "251429", cidade: "Ceará", estado: "CE"},
            "Jane Kelly (Star Jane)": {erp: "81974", cidade: "Manaus", estado: "AM"}
        };

        const metas = {
            1: 356153.56, 2: 453286.35, 3: 485663.95, 4: 596557.22, 5: 596557.22, 6: 679929.53,
            7: 647551.94, 8: 728495.93, 9: 728495.93, 10: 663740.73, 11: 663740.73, 12: 596557.22
        };
        
        const metasMensais = [356153.56, 453286.35, 485663.95, 596557.22, 596557.22, 679929.53, 647551.94, 728495.93, 728495.93, 663740.73, 663740.73, 596557.22];

        const nomesMeses = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const estadosBR = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
        
        const cidadesPorEstado = {
            "AC": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Brasiléia", "Plácido de Castro"],
            "AL": ["Maceió", "Rio Largo", "Arapiraca", "Delmiro Gouveia", "Palmeira dos Índios", "Maravilha", "Viçosa"],
            "AP": ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Calçoene"],
            "AM": ["Manaus", "Parintins", "Itacoatiara", "Coari", "Tefé", "Tabatinga", "Maués"],
            "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Jequié", "Ilhéus", "Lauro de Freitas", "Jacobina", "Valença", "Santo Estêvão", "Barreiras", "Paulo Afonso"],
            "CE": ["Fortaleza", "Caucaia", "Maracanaú", "Sobral", "Juazeiro do Norte", "Crato", "Iguatu", "Quixadá", "Maranguape", "Pacajus"],
            "DF": ["Brasília", "Taguatinga", "Ceilândia", "Samambaia", "Planaltina", "Sobradinho", "Gama"],
            "ES": ["Vitória", "Vila Velha", "Cariacica", "Serra", "Viana", "Linhares", "Colatina", "Guarapari", "Aracruz"],
            "GO": ["Goiânia", "Anápolis", "Aparecida de Goiânia", "Rio Verde", "Luziânia", "Itumbiara", "Goiatuba", "Jataí", "Formosa"],
            "MA": ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias", "Bacabal", "Santa Inês", "Açailândia"],
            "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra", "Lucas do Rio Verde", "Alta Floresta", "Barra do Garças"],
            "MS": ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Maracaju", "Naviraí", "Aquidauana", "Paranaíba"],
            "MG": ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Governador Valadares", "Divinópolis", "Ipatinga", "Poços de Caldas", "Uberaba", "Pouso Alegre", "Teófilo Otoni", "Sabará"],
            "PA": ["Belém", "Ananindeua", "Santarém", "Marabá", "Parauapebas", "Castanhal", "Cametá", "Itaituba", "Altamira"],
            "PB": ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Sousa", "Guarabira", "Cajazeiras", "Pombal", "Areia"],
            "PR": ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "São José dos Pinhais", "Foz do Iguaçu", "Aparecida de Paraná", "Apucarana", "Campo Largo", "Guarapuava", "Paranaguá"],
            "PE": ["Recife", "Jaboatão", "Olinda", "Caruaru", "Petrolina", "Garanhuns", "Cabo de Santo Agostinho", "Vitória de Santo Antão", "Paulista", "Gravatá"],
            "PI": ["Teresina", "Parnaíba", "Picos", "Floriano", "Piripiri", "Oeiras", "Altos", "Campo Maior"],
            "RJ": ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu", "São Gonçalo", "Campos dos Goytacazes", "Volta Redonda", "Magé", "Macaé", "Itaboraí", "Barra Mansa", "Cabo Frio"],
            "RN": ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Caicó", "Currais Novos", "Ceará-Mirim", "Açu"],
            "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria", "Novo Hamburgo", "Gravataí", "Viamão", "Canoas", "Sapucaia do Sul", "Almeida", "Rio Grande", "Lajeado", "Passo Fundo"],
            "RO": ["Porto Velho", "Ariquemes", "Ji-Paraná", "Vilhena", "Ouro Preto do Oeste", "Jaru", "Cacoal"],
            "RR": ["Boa Vista", "Rorainópolis", "Caracaraí", "Pacaraima", "Cantá"],
            "SC": ["Blumenau", "Florianópolis", "Joinville", "Itajaí", "Brusque", "Criciúma", "Chapecó", "Jaguaruna", "Lages", "Rio do Sul", "Tubarão", "Imbituba"],
            "SP": ["São Paulo", "Campinas", "Santos", "São Bernardo do Campo", "Santo André", "Osasco", "Guarulhos", "Diadema", "Ribeirão Preto", "Sorocaba", "Jundiaí", "Piracicaba", "Bauru", "Araçatuba", "Araraquara", "Franca", "São José do Rio Preto"],
            "SE": ["Aracaju", "Nossa Senhora do Socorro", "Barra dos Coqueiros", "Lagarto", "Simão Dias"],
            "TO": ["Palmas", "Araguaína", "Araguatins", "Paraíso do Tocantins", "Gurupi", "Miracema do Tocantins"]
        };

        let app = {
            faturamentos: JSON.parse(localStorage.getItem('faturamentos') || '[]'),
            projetos: JSON.parse(localStorage.getItem('projetos') || '[]'),
            visitas: JSON.parse(localStorage.getItem('visitas') || '[]'),
            clientes: JSON.parse(localStorage.getItem('clientes') || '{}'),
            oportunidades: JSON.parse(localStorage.getItem('oportunidades') || '[]'),
            visitasReunioes: JSON.parse(localStorage.getItem('visitasReunioes') || '[]'),
            currentMonth: new Date().getMonth() + 1,
            currentYear: 2026,
            paginaFaturamentoAtual: 1,
            itensPorPagina: 25,
            visitaEmRemarcar: null,
            projetoEmTransicao: null
        };

        // Inicializa dados padrão apenas se for a primeira vez que o sistema é aberto
        if (!localStorage.getItem('crm_inicializado')) {
            if (Object.keys(app.clientes).length === 0) {
                Object.assign(app.clientes, clientesComErp);
            }
            if (app.faturamentos.length === 0) {
                app.faturamentos = [
                    {cliente: "Grendene", erp: "493090", valor: 78100, data: "2026-01-15"},
                    {cliente: "Vulcabras", erp: "251429", valor: 59400, data: "2026-01-20"},
                    {cliente: "Jane Kelly (Star Jane)", erp: "81974", valor: 58100, data: "2026-02-05"},
                    {cliente: "Miss Bel", erp: "813702", valor: 26400, data: "2026-03-01"}
                ];
            }
            localStorage.setItem('crm_inicializado', 'true');
            salvar(); // Salva os padrões iniciais no banco local
        }

        async function salvar() {
            localStorage.setItem('faturamentos', JSON.stringify(app.faturamentos));
            localStorage.setItem('projetos', JSON.stringify(app.projetos));
            localStorage.setItem('visitas', JSON.stringify(app.visitas));
            localStorage.setItem('clientes', JSON.stringify(app.clientes));
            localStorage.setItem('oportunidades', JSON.stringify(app.oportunidades));
            localStorage.setItem('visitasReunioes', JSON.stringify(app.visitasReunioes || []));

            // Aguarda sincronização com o banco (await garante persistência antes de retornar)
            await fazerBackupLocal(false);
        }

        // ===== STATUS DO BANCO SQL =====
        function _fbSetStatus(estado, msg, detalhe) {
            const dot   = document.getElementById('fbDot');
            const txt   = document.getElementById('fbStatusTxt');
            const sync  = document.getElementById('fbSyncTxt');
            if (!dot) return;
            const cores = { conectando:'#f59e0b', conectado:'#22c55e', erro:'#ef4444', sincronizando:'#3b82f6' };
            dot.style.background  = cores[estado] || '#6b7280';
            txt.textContent       = msg;
            if (detalhe && sync) {
                sync.textContent  = detalhe.slice(0, 60) + (detalhe.length > 60 ? '…' : '');
                sync.title        = detalhe;
            }
        }

        // ===== PRODUTOS RFID (70 produtos) =====
        const PRODUTOS_RFID = [
  { descricao: "HCA-M73010572-SG MUELLER", codigo: "700692724", semBureau: { m15: 349.92, m10: 317.14, m5: 289.97, m0: 267.09 }, comBureau: { m15: 406.84, m10: 368.72, m5: 337.14, m0: 310.53 } },
  { descricao: "HCA-M73010572-BOPP", codigo: "700624112", semBureau: { m15: 373.20, m10: 338.24, m5: 309.26, m0: 284.86 }, comBureau: { m15: 430.12, m10: 389.82, m5: 356.43, m0: 328.30 } },
  { descricao: "HCM-M7305020-PET", codigo: "700645989", semBureau: { m15: 1749.22, m10: 1585.34, m5: 1449.53, m0: 1335.15 }, comBureau: { m15: 1778.66, m10: 1612.02, m5: 1473.92, m0: 1357.62 } },
  { descricao: "HCA-M7307319-PET LAMINADO", codigo: "700711909", semBureau: { m15: 353.63, m10: 320.50, m5: 293.04, m0: 269.92 }, comBureau: { m15: 391.52, m10: 354.84, m5: 324.44, m0: 298.84 } },
  { descricao: "HCA-M7308638-LARROUDE", codigo: "700697155", semBureau: { m15: 314.30, m10: 284.86, m5: 260.45, m0: 239.90 }, comBureau: { m15: 359.44, m10: 325.77, m5: 297.86, m0: 274.36 } },
  { descricao: "HCA-M7306530-DUPLOUSO", codigo: "700697155", semBureau: { m15: 337.37, m10: 305.77, m5: 279.57, m0: 257.51 }, comBureau: { m15: 377.81, m10: 342.41, m5: 313.08, m0: 288.37 } },
  { descricao: "HCA-M73010030-BOPP", codigo: "700697155", semBureau: { m15: 310.36, m10: 281.28, m5: 257.18, m0: 236.89 }, comBureau: { m15: 350.79, m10: 317.92, m5: 290.69, m0: 267.75 } },
  { descricao: "HCC-M73010035-LVN BM BIAMAR", codigo: "700697151", semBureau: { m15: 478.83, m10: 433.97, m5: 396.80, m0: 365.49 }, comBureau: { m15: 519.88, m10: 471.17, m5: 430.81, m0: 396.81 } },
  { descricao: "HCC-U82521-VV-PET", codigo: "700697148", semBureau: { m15: 523.00, m10: 474.00, m5: 433.40, m0: 399.20 }, comBureau: { m15: 559.56, m10: 507.14, m5: 463.69, m0: 427.10 } },
  { descricao: "HCA-U810017-JWL BOPP", codigo: "700692710", semBureau: { m15: 447.26, m10: 405.35, m5: 370.63, m0: 341.38 }, comBureau: { m15: 482.98, m10: 437.73, m5: 400.23, m0: 368.65 } },
  { descricao: "HCA-M73010060-MENEGOTTI", codigo: "700688813", semBureau: { m15: 336.15, m10: 304.66, m5: 278.56, m0: 256.58 }, comBureau: { m15: 387.58, m10: 351.26, m5: 321.17, m0: 295.83 } },
  { descricao: "HCA-M730100200 INTEGRAL", codigo: "700683245", semBureau: { m15: 470.22, m10: 426.17, m5: 389.66, m0: 358.91 }, comBureau: { m15: 567.71, m10: 514.52, m5: 470.45, m0: 433.33 } },
  { descricao: "HCC-M73011025-BCD", codigo: "700682937", semBureau: { m15: 315.23, m10: 285.69, m5: 261.22, m0: 240.61 }, comBureau: { m15: 353.12, m10: 320.04, m5: 292.62, m0: 269.53 } },
  { descricao: "HCM-M730105196-CL BCD", codigo: "700675907", semBureau: { m15: 691.90, m10: 627.07, m5: 573.36, m0: 528.11 }, comBureau: { m15: 785.72, m10: 712.11, m5: 651.11, m0: 599.73 } },
  { descricao: "HCC-M7306235-BM WESTERN", codigo: "700683153", semBureau: { m15: 341.72, m10: 309.70, m5: 283.17, m0: 260.83 }, comBureau: { m15: 382.68, m10: 346.82, m5: 317.11, m0: 292.09 } },
  { descricao: "HCC-M73010035-BIAMAR", codigo: "700610216", semBureau: { m15: 468.15, m10: 424.29, m5: 387.94, m0: 357.33 }, comBureau: { m15: 509.19, m10: 461.48, m5: 421.95, m0: 388.66 } },
  { descricao: "HCC-M7309065-KYLY", codigo: "700610217", semBureau: { m15: 483.41, m10: 438.12, m5: 400.58, m0: 368.98 }, comBureau: { m15: 534.41, m10: 484.34, m5: 442.85, m0: 407.91 } },
  { descricao: "HCA-U89725-JWL BOPP", codigo: "700680846", semBureau: { m15: 465.37, m10: 421.77, m5: 385.64, m0: 355.21 }, comBureau: { m15: 505.81, m10: 458.42, m5: 419.15, m0: 386.07 } },
  { descricao: "HCC-M7304625-MARLUVAS", codigo: "700459322", semBureau: { m15: 297.01, m10: 269.18, m5: 246.12, m0: 226.70 }, comBureau: { m15: 326.45, m10: 295.86, m5: 270.52, m0: 249.17 } },
  { descricao: "HCA-M730100100-DUPLO PET", codigo: "700610224", semBureau: { m15: 861.06, m10: 780.38, m5: 713.53, m0: 657.23 }, comBureau: { m15: 930.98, m10: 843.75, m5: 771.47, m0: 710.60 } },
  { descricao: "HCA-M73010070-SG", codigo: "700678639", semBureau: { m15: 349.37, m10: 316.64, m5: 289.52, m0: 266.67 }, comBureau: { m15: 406.29, m10: 368.23, m5: 336.68, m0: 310.12 } },
  { descricao: "HCC-M730110215,9-EXPERT", codigo: "700678038", semBureau: { m15: 630.56, m10: 571.49, m5: 522.53, m0: 481.30 }, comBureau: { m15: 731.19, m10: 662.69, m5: 605.92, m0: 558.11 } },
  { descricao: "HCA-M73010070-BOPP", codigo: "700676442", semBureau: { m15: 364.84, m10: 330.66, m5: 302.33, m0: 278.48 }, comBureau: { m15: 421.76, m10: 382.24, m5: 349.50, m0: 321.92 } },
  { descricao: "HCA-M7309540-AZUL AMARELO", codigo: "700675912", semBureau: { m15: 330.50, m10: 299.54, m5: 273.88, m0: 252.27 }, comBureau: { m15: 375.64, m10: 340.45, m5: 311.29, m0: 286.72 } },
  { descricao: "HCA-U83015-SG", codigo: "700675828", semBureau: { m15: 437.67, m10: 396.66, m5: 362.68, m0: 334.07 }, comBureau: { m15: 473.39, m10: 429.04, m5: 392.28, m0: 361.33 } },
  { descricao: "HCA-U83015-BOPP", codigo: "700682664", semBureau: { m15: 447.26, m10: 405.35, m5: 370.63, m0: 341.38 }, comBureau: { m15: 482.98, m10: 437.73, m5: 400.23, m0: 368.65 } },
  { descricao: "HCA-M73073140-PET", codigo: "700675748", semBureau: { m15: 627.16, m10: 568.40, m5: 519.71, m0: 478.70 }, comBureau: { m15: 704.41, m10: 638.41, m5: 583.72, m0: 537.66 } },
  { descricao: "HCA-M7305020-BOPP", codigo: "700676086", semBureau: { m15: 339.84, m10: 308.00, m5: 281.61, m0: 259.39 }, comBureau: { m15: 380.27, m10: 344.64, m5: 315.12, m0: 290.25 } },
  { descricao: "HCC-M73010025-KYLY V.2", codigo: "700630616", semBureau: { m15: 307.51, m10: 278.70, m5: 254.83, m0: 234.72 }, comBureau: { m15: 345.40, m10: 313.04, m5: 286.23, m0: 263.64 } },
  { descricao: "HCA-U86117-BOPP", codigo: "700597924", semBureau: { m15: 447.73, m10: 405.78, m5: 371.02, m0: 341.74 }, comBureau: { m15: 483.45, m10: 438.15, m5: 400.62, m0: 369.01 } },
  { descricao: "HCA-M7305020-PET", codigo: "700645992", semBureau: { m15: 360.40, m10: 326.64, m5: 298.65, m0: 275.09 }, comBureau: { m15: 398.30, m10: 360.98, m5: 330.06, m0: 304.01 } },
  { descricao: "HCC-M730110200", codigo: "700611209", semBureau: { m15: 523.97, m10: 474.88, m5: 434.20, m0: 399.94 }, comBureau: { m15: 619.36, m10: 561.34, m5: 513.25, m0: 472.75 } },
  { descricao: "HCC-M730110340", codigo: "700611210", semBureau: { m15: 703.07, m10: 637.20, m5: 582.61, m0: 536.64 }, comBureau: { m15: 844.53, m10: 765.41, m5: 699.84, m0: 644.62 } },
  { descricao: "HCA-M73010025-PET", codigo: "700631421", semBureau: { m15: 349.95, m10: 317.16, m5: 289.99, m0: 267.11 }, comBureau: { m15: 390.38, m10: 353.80, m5: 323.49, m0: 297.97 } },
  { descricao: "HCA-M73010025-BOPP", codigo: "700631421", semBureau: { m15: 309.25, m10: 280.28, m5: 256.27, m0: 236.05 }, comBureau: { m15: 349.68, m10: 316.92, m5: 289.77, m0: 266.91 } },
  { descricao: "HCC-M73010035-BM", codigo: "700610216", semBureau: { m15: 312.58, m10: 283.29, m5: 259.02, m0: 238.59 }, comBureau: { m15: 353.62, m10: 320.49, m5: 293.03, m0: 269.91 } },
  { descricao: "HCA-U87534-JWL", codigo: "700597921", semBureau: { m15: 514.67, m10: 466.45, m5: 426.49, m0: 392.84 }, comBureau: { m15: 556.32, m10: 504.20, m5: 461.01, m0: 424.63 } },
  { descricao: "HCA-M73010030-PET", codigo: "700616224", semBureau: { m15: 349.94, m10: 317.15, m5: 289.99, m0: 267.10 }, comBureau: { m15: 390.37, m10: 353.80, m5: 323.49, m0: 297.96 } },
  { descricao: "HCA-M730100250-SG", codigo: "700616225", semBureau: { m15: 515.44, m10: 467.15, m5: 427.13, m0: 393.43 }, comBureau: { m15: 628.11, m10: 569.26, m5: 520.50, m0: 479.43 } },
  { descricao: "HCC-U82521-VV", codigo: "700610210", semBureau: { m15: 452.69, m10: 410.28, m5: 375.13, m0: 345.53 }, comBureau: { m15: 489.25, m10: 443.41, m5: 405.43, m0: 373.43 } },
  { descricao: "HCA-M7305030-PET DUPLO", codigo: "700635152", semBureau: { m15: 455.42, m10: 412.75, m5: 377.39, m0: 347.62 }, comBureau: { m15: 495.85, m10: 449.40, m5: 410.90, m0: 378.48 } },
  { descricao: "HCA-M73073205-SG", codigo: "700616227", semBureau: { m15: 457.45, m10: 414.59, m5: 379.07, m0: 349.16 }, comBureau: { m15: 555.98, m10: 503.89, m5: 460.73, m0: 424.37 } },
  { descricao: "HCA-M7304520-PET", codigo: "700645864", semBureau: { m15: 359.97, m10: 326.24, m5: 298.29, m0: 274.76 }, comBureau: { m15: 397.86, m10: 360.58, m5: 329.69, m0: 303.68 } },
  { descricao: "HCA-M7307319-HVN", codigo: "700610206", semBureau: { m15: 286.88, m10: 260.01, m5: 237.73, m0: 218.97 }, comBureau: { m15: 324.78, m10: 294.35, m5: 269.13, m0: 247.90 } },
  { descricao: "HCC-M7306025-hvn", codigo: "700634243", semBureau: { m15: 322.50, m10: 292.29, m5: 267.25, m0: 246.16 }, comBureau: { m15: 360.40, m10: 326.63, m5: 298.65, m0: 275.08 } },
  { descricao: "HCC-M73010025-hvn", codigo: "700610209", semBureau: { m15: 293.98, m10: 266.43, m5: 243.61, m0: 224.39 }, comBureau: { m15: 331.87, m10: 300.78, m5: 275.01, m0: 253.31 } },
  { descricao: "HCA-M7307319-SG", codigo: "700371223", semBureau: { m15: 286.88, m10: 260.01, m5: 237.73, m0: 218.97 }, comBureau: { m15: 324.78, m10: 294.35, m5: 269.13, m0: 247.90 } },
  { descricao: "HCC-M73010025", codigo: "700507894", semBureau: { m15: 293.98, m10: 266.43, m5: 243.61, m0: 224.39 }, comBureau: { m15: 331.87, m10: 300.78, m5: 275.01, m0: 253.31 } },
  { descricao: "HCA-M73010572-PET ATLAS", codigo: "700500575", semBureau: { m15: 474.93, m10: 430.43, m5: 393.56, m0: 362.51 }, comBureau: { m15: 531.85, m10: 482.02, m5: 440.73, m0: 405.95 } },
  { descricao: "HCA-M7308050-DU AMC", codigo: "700427910", semBureau: { m15: 329.22, m10: 298.38, m5: 272.82, m0: 251.29 }, comBureau: { m15: 376.98, m10: 341.66, m5: 312.39, m0: 287.74 } },
  { descricao: "HCC-M7306025-BM", codigo: "700624124", semBureau: { m15: 338.49, m10: 306.78, m5: 280.50, m0: 258.37 }, comBureau: { m15: 376.39, m10: 341.12, m5: 311.90, m0: 287.29 } },
  { descricao: "HCA-M7305025-PET DUPLO", codigo: "700635156", semBureau: { m15: 455.38, m10: 412.72, m5: 377.36, m0: 347.59 }, comBureau: { m15: 495.81, m10: 449.36, m5: 410.86, m0: 378.45 } },
  { descricao: "HCA-M73010050-SG", codigo: "700526463", semBureau: { m15: 322.10, m10: 291.92, m5: 266.91, m0: 245.85 }, comBureau: { m15: 369.85, m10: 335.20, m5: 306.49, m0: 282.30 } },
  { descricao: "HCA-M73010033-SG", codigo: "700634488", semBureau: { m15: 304.55, m10: 276.02, m5: 252.38, m0: 232.46 }, comBureau: { m15: 346.42, m10: 313.97, m5: 287.07, m0: 264.42 } },
  { descricao: "HCA-M730100160-SG", codigo: "700501598", semBureau: { m15: 431.23, m10: 390.83, m5: 357.35, m0: 329.15 }, comBureau: { m15: 515.64, m10: 467.33, m5: 427.29, m0: 393.58 } },
  { descricao: "HCA-U89725-JWL", codigo: "700597920", semBureau: { m15: 505.51, m10: 458.15, m5: 418.90, m0: 385.85 }, comBureau: { m15: 545.94, m10: 494.79, m5: 452.41, m0: 416.71 } },
  { descricao: "HCA-M73010572-SG", codigo: "700566657", semBureau: { m15: 349.38, m10: 316.65, m5: 289.52, m0: 266.68 }, comBureau: { m15: 406.30, m10: 368.23, m5: 336.69, m0: 310.12 } },
  { descricao: "HCA-M73010050-PET", codigo: "700572538", semBureau: { m15: 403.95, m10: 366.11, m5: 334.74, m0: 308.33 }, comBureau: { m15: 451.71, m10: 409.39, m5: 374.32, m0: 344.78 } },
  { descricao: "HCA-M7308080-FLAG PET", codigo: "700570988", semBureau: { m15: 472.17, m10: 427.93, m5: 391.27, m0: 360.40 }, comBureau: { m15: 529.09, m10: 479.52, m5: 438.44, m0: 403.84 } },
  { descricao: "HCA-M730100100-V2 BEIRA RIO", codigo: "700610222", semBureau: { m15: 441.13, m10: 399.80, m5: 365.55, m0: 336.71 }, comBureau: { m15: 511.05, m10: 463.17, m5: 423.49, m0: 390.07 } },
  { descricao: "HCA-M7307040-PET LEAL", codigo: "700610218", semBureau: { m15: 533.83, m10: 483.82, m5: 442.37, m0: 407.47 }, comBureau: { m15: 581.59, m10: 527.10, m5: 481.95, m0: 443.92 } },
  { descricao: "HCA-M7304520-BOPP", codigo: "700507893", semBureau: { m15: 329.10, m10: 298.26, m5: 272.71, m0: 251.20 }, comBureau: { m15: 366.99, m10: 332.61, m5: 304.11, m0: 280.12 } },
  { descricao: "HCA-M7307319-LEAL", codigo: "700624116", semBureau: { m15: 302.32, m10: 273.99, m5: 250.52, m0: 230.75 }, comBureau: { m15: 342.75, m10: 310.63, m5: 284.02, m0: 261.61 } },
  { descricao: "HCA-M7304520-LEAL", codigo: "700624120", semBureau: { m15: 616.62, m10: 558.85, m5: 510.97, m0: 470.65 }, comBureau: { m15: 668.04, m10: 605.45, m5: 553.59, m0: 509.91 } },
  { descricao: "HCA-M7304520-SG", codigo: "700427911", semBureau: { m15: 315.59, m10: 286.02, m5: 261.52, m0: 240.89 }, comBureau: { m15: 353.49, m10: 320.37, m5: 292.92, m0: 269.81 } },
  { descricao: "HCA-M7307319-BOPP", codigo: "700631468", semBureau: { m15: 299.62, m10: 271.55, m5: 248.29, m0: 228.70 }, comBureau: { m15: 337.51, m10: 305.89, m5: 279.69, m0: 257.62 } },
  { descricao: "HCA-R64519 PET", codigo: "700410448", semBureau: { m15: 440.70, m10: 399.41, m5: 365.20, m0: 336.38 }, comBureau: { m15: 478.38, m10: 433.56, m5: 396.42, m0: 365.14 } },
  { descricao: "HCC-M73010025-KYLY", codigo: "700630614", semBureau: { m15: 307.51, m10: 278.70, m5: 254.83, m0: 234.72 }, comBureau: { m15: 345.40, m10: 313.04, m5: 286.23, m0: 263.64 } },
  { descricao: "HCA-R66406-PP", codigo: "700610202", semBureau: { m15: 593.52, m10: 537.91, m5: 491.83, m0: 453.02 }, comBureau: { m15: 622.95, m10: 564.59, m5: 516.22, m0: 475.49 } },
  { descricao: "HCA-M73010025-SG", codigo: "700631421", semBureau: { m15: 300.27, m10: 272.14, m5: 248.83, m0: 229.19 }, comBureau: { m15: 340.70, m10: 308.78, m5: 282.33, m0: 260.05 } },
  { descricao: "HCC-M7306025", codigo: "700541145", semBureau: { m15: 323.10, m10: 292.83, m5: 267.74, m0: 246.62 }, comBureau: { m15: 360.99, m10: 327.17, m5: 299.14, m0: 275.54 } },
  { descricao: "HCA-M7308080-FLAG-SG", codigo: "700624114", semBureau: { m15: 349.38, m10: 316.65, m5: 289.52, m0: 266.68 }, comBureau: { m15: 406.30, m10: 368.23, m5: 336.69, m0: 310.12 } },
  { descricao: "HCA-R64623-OM", codigo: "700507898", semBureau: { m15: 541.96, m10: 491.18, m5: 449.11, m0: 413.67 }, comBureau: { m15: 582.39, m10: 527.83, m5: 482.61, m0: 444.53 } },
  { descricao: "HCA-M730100160 PET", codigo: "700624103", semBureau: { m15: 676.81, m10: 613.40, m5: 560.85, m0: 516.60 }, comBureau: { m15: 761.21, m10: 689.89, m5: 630.79, m0: 581.02 } },
  { descricao: "HCA-M7309323-PET DUPLO", codigo: "700541152", semBureau: { m15: 390.44, m10: 353.86, m5: 323.55, m0: 298.02 }, comBureau: { m15: 428.34, m10: 388.21, m5: 354.95, m0: 326.94 } },
  { descricao: "HCA-M73010030-SG", codigo: "700616223", semBureau: { m15: 329.44, m10: 299.69, m5: 274.87, m0: 253.84 }, comBureau: { m15: 383.02, m10: 348.44, m5: 319.58, m0: 295.13 } }
        ];

        // ===== FUNÇÕES CONSULTA DE PREÇOS =====
        
        function toggleConsultaPanel(panelId) {
            const panel = document.getElementById(panelId);
            const icon = document.getElementById(panelId + 'Icon');
            
            if (panel.style.display === 'none') {
                panel.style.display = 'block';
                icon.textContent = '- Recolher';
            } else {
                panel.style.display = 'none';
                icon.textContent = '+ Expandir';
            }
        }
        
        function onCfInput() {
            const input = document.getElementById('cfInput');
            const valor = parseFloat(input.value) || 0;
            document.getElementById('cfActiveBadge').textContent = valor.toFixed(2) + '%';
            filtrarProdutosConsulta();
        }
        
        function resetCfConsulta() {
            document.getElementById('cfInput').value = '';
            document.getElementById('cfActiveBadge').textContent = '0.00%';
            document.querySelectorAll('.prazo-btn').forEach(btn => {
                btn.style.borderColor = 'var(--border)';
                btn.style.background = 'var(--bg-primary)';
                btn.style.color = 'var(--text)';
            });
            filtrarProdutosConsulta();
        }
        
        function setFilterConsulta(tipo, btn) {
            document.querySelectorAll('[onclick*="setFilterConsulta"]').forEach(b => {
                b.style.background = 'transparent';
                b.style.borderColor = 'var(--border)';
                b.style.color = 'var(--text)';
            });
            btn.style.background = 'var(--primary)';
            btn.style.color = 'white';
            btn.style.borderColor = 'var(--primary)';
            
            document.getElementById('filtroConsultaBureau').value = tipo;
            filtrarProdutosConsulta();
        }
        
        function filtrarProdutosConsulta() {
            const searchTerm = document.getElementById('searchInputConsulta').value.toLowerCase();
            const bureauFilter = document.getElementById('filtroConsultaBureau').value || 'all';
            const cfValue = parseFloat(document.getElementById('cfInput').value) || 0;
            
            // Filtrar produtos
            let filtrados = PRODUTOS_RFID.filter(p => {
                const matchSearch = p.descricao.toLowerCase().includes(searchTerm) || 
                                   p.codigo.toLowerCase().includes(searchTerm);
                return matchSearch;
            });
            
            // Aplicar filtro de bureau
            if (bureauFilter === 'sem') {
                // Filtrar apenas preços sem bureau
            } else if (bureauFilter === 'com') {
                // Filtrar apenas preços com bureau
            }
            
            document.getElementById('countConsulta').textContent = filtrados.length;
            
            const resultsDiv = document.getElementById('resultsConsulta');
            if (filtrados.length === 0) {
                resultsDiv.innerHTML = '<div style="padding: 30px; text-align: center; color: var(--text-secondary);">Nenhum produto encontrado</div>';
            } else {
                resultsDiv.innerHTML = filtrados.map((p, idx) => {
                    // Selecionar preços com base no filtro de bureau
                    const precos = bureauFilter === 'com' ? p.comBureau : 
                                  bureauFilter === 'sem' ? p.semBureau :
                                  p.semBureau; // padrão sem bureau
                    
                    // Calcular preços com custo financeiro
                    const fator = 1 + (cfValue / 100);
                    const precoComCF = {
                        m15: (precos.m15 * fator).toFixed(2),
                        m10: (precos.m10 * fator).toFixed(2),
                        m5: (precos.m5 * fator).toFixed(2),
                        m0: (precos.m0 * fator).toFixed(2)
                    };
                    
                    return `
                        <div style="border: 1px solid var(--border); padding: 20px; border-radius: 8px; background: var(--bg-secondary);">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                                <div>
                                    <div style="font-weight: 700; font-size: 16px; margin-bottom: 5px;">${p.descricao}</div>
                                    <div style="color: var(--text-secondary); font-size: 13px;">Código: ${p.codigo}</div>
                                    ${bureauFilter === 'com' || bureauFilter === 'all' ? '<span style="display: inline-block; margin-top: 8px; background: var(--primary); color: white; padding: 4px 10px; border-radius: 6px; font-size: 11px;">Com Bureau</span>' : ''}
                                </div>
                            </div>
                            
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 15px;">
                                <div style="padding: 12px; background: var(--bg-primary); border-radius: 6px;">
                                    <div style="font-size: 12px; color: var(--text-secondary);">Margem 15%</div>
                                    <div style="font-weight: 600; font-size: 18px; color: var(--success);">R$ ${precoComCF.m15}</div>
                                </div>
                                <div style="padding: 12px; background: var(--bg-primary); border-radius: 6px;">
                                    <div style="font-size: 12px; color: var(--text-secondary);">Margem 10%</div>
                                    <div style="font-weight: 600; font-size: 18px; color: var(--success);">R$ ${precoComCF.m10}</div>
                                </div>
                                <div style="padding: 12px; background: var(--bg-primary); border-radius: 6px;">
                                    <div style="font-size: 12px; color: var(--text-secondary);">Margem 5%</div>
                                    <div style="font-weight: 600; font-size: 18px; color: var(--success);">R$ ${precoComCF.m5}</div>
                                </div>
                                <div style="padding: 12px; background: var(--bg-primary); border-radius: 6px;">
                                    <div style="font-size: 12px; color: var(--text-secondary);">Margem 0%</div>
                                    <div style="font-weight: 600; font-size: 18px; color: var(--success);">R$ ${precoComCF.m0}</div>
                                </div>
                            </div>
                            
                            ${cfValue > 0 ? `<div style="padding: 10px; background: rgba(216, 90, 48, 0.1); border-left: 3px solid var(--accent); border-radius: 4px; margin-bottom: 15px; font-size: 12px; color: var(--text-secondary);">ℹ️ Preços com custo financeiro de <b>${cfValue.toFixed(2)}%</b> aplicado</div>` : ''}
                            
                            <div style="display: flex; gap: 10px;">
                                <button onclick="adicionarProdutoCarrinho('${p.codigo}', '${p.descricao}', ${precoComCF.m15}, '15')" style="flex: 1; padding: 10px; background: var(--primary); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 600;">Adicionar</button>
                                <button onclick="compartilharProduto('${p.codigo}')" style="padding: 10px 16px; background: transparent; border: 1px solid var(--border); border-radius: 4px; cursor: pointer; font-size: 14px;">📤</button>
                            </div>
                        </div>
                    `;
                }).join('');
            }
        }
        
        const carrinhoConsulta = [];
        
        function adicionarProdutoCarrinho(codigo, descricao, preco, margem) {
            const item = { codigo, descricao, preco, margem, quantidade: 1 };
            carrinhoConsulta.push(item);
            // Atualiza badge do botão de proposta
            const badge = document.getElementById('carrinhoCountBadge');
            if (badge) { badge.style.display = 'inline'; badge.textContent = carrinhoConsulta.length; }
            // Atualiza FAB
            const fabC = document.getElementById('fabContagem');
            if (fabC) fabC.textContent = carrinhoConsulta.length;
            alert(`✓ Produto adicionado ao carrinho!\n\n${descricao}\nCódigo: ${codigo}\nR$ ${preco.toFixed(2)} (Margem ${margem}%)\n\n📄 ${carrinhoConsulta.length} produto(s) no carrinho. Clique em "Gerar Proposta PDF" quando quiser gerar.`);
        }
        
        function compartilharProduto(codigo) {
            const produto = PRODUTOS_RFID.find(p => p.codigo === codigo);
            if (!produto) return;
            
            const mensagem = `Confira este produto RFID:\n\n${produto.descricao}\nCódigo: ${codigo}\n\nPreços com diferentes margens:\nMargem 15%: R$ ${produto.semBureau.m15.toFixed(2)}\nMargem 10%: R$ ${produto.semBureau.m10.toFixed(2)}\nMargem 5%: R$ ${produto.semBureau.m5.toFixed(2)}\nMargem 0%: R$ ${produto.semBureau.m0.toFixed(2)}`;
            
            // Copiar para clipboard e avisar
            navigator.clipboard.writeText(mensagem).then(() => {
                alert('✓ Informações do produto copiadas para compartilhar!');
            });
        }
        
        // Inicializar consulta quando carregar a página
        function inicializarConsulta() {
            document.getElementById('filtroConsultaBureau').value = 'all';
            preencherPrazos();
            filtrarProdutosConsulta();
        }
        
        function preencherPrazos() {
            const prazos = [
                { label: 'Antecipado', custo: -1.5, cod: 566 },
                { label: '30 dias', custo: 3.0, cod: 78 },
                { label: '30/45 dias', custo: 3.0, cod: 2070 },
                { label: '30/45/60 dias', custo: 4.5, cod: 213 },
                { label: '30/45/60/75 dias', custo: 6.0, cod: 299 },
                { label: '30/45/60/75/90 dias', custo: 6.0, cod: 1619 },
                { label: '30/60/90 dias', custo: 6.0, cod: 191 },
                { label: '28 dias', custo: 3.0, cod: 701 },
                { label: '28/42/56 dias', custo: 4.5, cod: 736 },
                { label: '28/56 dias', custo: 1.5, cod: 469 },
                { label: '42/56/70 dias', custo: 6.0, cod: 779 },
                { label: '60/90 dias', custo: 7.0, cod: 1031 },
                { label: '120 dias', custo: 9.0, cod: 132 },
                { label: '30/60/90/120 dias', custo: 7.8, cod: null },
                { label: '30/60 dias', custo: 4.5, cod: null },
                { label: '60/90/120/150 dias', custo: 9.5, cod: null },
                { label: '90 dias', custo: 7.0, cod: null }
            ];
            
            const grid = document.getElementById('prazosGrid');
            grid.innerHTML = prazos.map((p, idx) => `
                <button class="prazo-btn" data-custo="${p.custo}" data-idx="${idx}"
                    title="Cod: ${p.cod || '---'} | CF: ${p.custo > 0 ? '+' : ''}${p.custo}%"
                    style="padding: 10px 8px; border: 1px solid var(--border); background: var(--bg-primary); color: var(--text); border-radius: 4px; cursor: pointer; transition: all 0.2s; text-align: center;">
                    <div style="font-weight: 600; font-size: 12px; line-height: 1.3;">${p.label}</div>
                    <div style="font-size: 11px; color: var(--text-secondary); margin-top: 4px;">${p.custo > 0 ? '+' : ''}${p.custo}%</div>
                    ${p.cod ? `<div style="font-size: 10px; color: var(--text-secondary); margin-top: 2px;">Cod ${p.cod}</div>` : ''}
                </button>
            `).join('');
            
            // Adicionar event listeners
            document.querySelectorAll('.prazo-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const custo = parseFloat(this.getAttribute('data-custo'));
                    definirCusto(custo, this);
                });
            });
        }
        
        function definirCusto(custo, btn) {
            document.querySelectorAll('.prazo-btn').forEach(b => {
                b.style.borderColor = 'var(--border)';
                b.style.background = 'var(--bg-primary)';
                b.style.color = 'var(--text)';
            });
            btn.style.borderColor = 'var(--primary)';
            btn.style.background = 'var(--primary)';
            btn.style.color = 'white';
            
            // Salva label do prazo para a proposta PDF
            window._prazoLabelAtual = btn.querySelector('div')?.textContent?.trim() || '';
            
            document.getElementById('cfInput').value = custo.toFixed(2);
            document.getElementById('cfActiveBadge').textContent = (custo > 0 ? '+' : '') + custo.toFixed(2) + '%';
            filtrarProdutosConsulta();
        }

        function switchTab(tab, el) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(tab).classList.add('active');

            // Marca o botão ativo — usa el se passado, senão tenta event.currentTarget
            const btn = el || (typeof event !== 'undefined' && event.currentTarget) || null;
            if (btn) btn.classList.add('active');

            // Mostra/oculta FAB de proposta
            const fab = document.getElementById('fabProposta');
            if (fab) fab.style.display = tab === 'consulta' ? 'flex' : 'none';

            if (tab === 'projetos') {
                setTimeout(() => { renderKanban(); }, 100);
            } else if (tab === 'visitas') {
                setTimeout(() => { renderizarKanbanVisitasReunioes(); }, 100);
            } else if (tab === 'clientes') {
                atualizarTabelaClientes();
            } else if (tab === 'dashboard') {
                atualizarDashboard();
            }

            // Fechar sidebar em mobile ao trocar de aba
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const contentWrapper = document.getElementById('contentWrapper');
            const overlay = document.getElementById('sidebarOverlay');
            
            if (window.innerWidth <= 768) {
                const isVisible = sidebar.classList.contains('visible');
                if (isVisible) {
                    sidebar.classList.remove('visible');
                    overlay.classList.remove('active');
                } else {
                    sidebar.classList.add('visible');
                    overlay.classList.add('active');
                }
            } else {
                sidebar.classList.toggle('hidden');
                contentWrapper.classList.toggle('expanded');
            }
        }

        function closeSidebar() {
            const sidebar = document.getElementById('sidebar');
            const contentWrapper = document.getElementById('contentWrapper');
            const overlay = document.getElementById('sidebarOverlay');
            
            sidebar.classList.remove('visible');
            overlay.classList.remove('active');
            
            if (window.innerWidth > 768) {
                sidebar.classList.add('hidden');
                contentWrapper.classList.add('expanded');
            }
        }

        function abrirResultadosBusca() {
            const termo = document.getElementById('buscaGlobal').value.toLowerCase().trim();
            const container = document.getElementById('resultadosBuscaGlobal');
            
            if (termo.length < 2) {
                container.style.display = 'none';
                return;
            }
            
            const resultados = [];
            
            // Buscar em Clientes
            Object.entries(app.clientes).forEach(([nome, dados]) => {
                if (nome.toLowerCase().includes(termo) || 
                    (dados.erp && dados.erp.toLowerCase().includes(termo)) ||
                    (dados.email && dados.email.toLowerCase().includes(termo)) ||
                    (dados.telefone && dados.telefone.includes(termo))) {
                    resultados.push({
                        tipo: 'Cliente',
                        titulo: nome,
                        icon: '👥',
                        acao: `navegarParaAba('clientes')`
                    });
                }
            });
            
            // Buscar em Faturamentos
            app.faturamentos.forEach(f => {
                if (f.cliente.toLowerCase().includes(termo) || 
                    (f.pedidoHaco && f.pedidoHaco.toLowerCase().includes(termo))) {
                    resultados.push({
                        tipo: 'Faturamento',
                        titulo: `${f.cliente} - ${f.pedidoHaco || 'Sem pedido'}`,
                        subtitulo: `R$ ${f.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`,
                        icon: '💰',
                        acao: `navegarParaAba('dashboard'); document.getElementById('buscaPedidoFaturamento').value = '${f.pedidoHaco || ''}'`
                    });
                }
            });
            
            // Buscar em Projetos/Oportunidades
            app.oportunidades.forEach(o => {
                if (o.nome.toLowerCase().includes(termo) || 
                    o.cliente.toLowerCase().includes(termo) ||
                    (o.contato && o.contato.toLowerCase().includes(termo))) {
                    resultados.push({
                        tipo: 'Projeto',
                        titulo: o.nome,
                        subtitulo: o.cliente,
                        icon: '🎯',
                        acao: `navegarParaAba('projetos')`
                    });
                }
            });
            
            // Buscar em Visitas
            app.visitasReunioes.forEach(v => {
                if (v.cliente.toLowerCase().includes(termo) || 
                    (v.nomeContato && v.nomeContato.toLowerCase().includes(termo)) ||
                    (v.telefone && v.telefone.includes(termo))) {
                    resultados.push({
                        tipo: 'Visita',
                        titulo: v.cliente,
                        subtitulo: `${v.nomeContato} - ${new Date(v.dataISO).toLocaleDateString('pt-BR')}`,
                        icon: '🔵',
                        acao: `navegarParaAba('visitas')`
                    });
                }
            });
            
            if (resultados.length === 0) {
                container.innerHTML = '<div style="padding: 15px; text-align: center; color: var(--text-secondary);">Nenhum resultado encontrado</div>';
            } else {
                container.innerHTML = resultados.slice(0, 15).map(r => `
                    <div onclick="${r.acao}" style="padding: 12px 15px; border-bottom: 1px solid var(--border); cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='var(--primary)'; this.style.color='white'" onmouseout="this.style.background='transparent'; this.style.color='var(--text)'">
                        <div style="font-weight: 600; display: flex; gap: 10px; align-items: center;">
                            <span>${r.icon}</span>
                            <span>${r.titulo}</span>
                            <span style="font-size: 12px; opacity: 0.7; margin-left: auto;">${r.tipo}</span>
                        </div>
                        ${r.subtitulo ? `<div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">${r.subtitulo}</div>` : ''}
                    </div>
                `).join('');
            }
            
            container.style.display = 'block';
        }
        
        function navegarParaAba(aba) {
            switchTab(aba);
            document.getElementById('buscaGlobal').value = '';
            document.getElementById('resultadosBuscaGlobal').style.display = 'none';
        }
        
        // Fechar busca ao clicar fora
        document.addEventListener('click', function(event) {
            const buscaInput = document.getElementById('buscaGlobal');
            const resultados = document.getElementById('resultadosBuscaGlobal');
            if (buscaInput && resultados && !buscaInput.contains(event.target) && !resultados.contains(event.target)) {
                resultados.style.display = 'none';
            }
        });

        function calcularKPIs(mes) {
            // Faturamentos do mês (apenas faturados)
            const faturamentosDoMes = app.faturamentos.filter(f => 
                new Date(f.data).getMonth() + 1 === mes && (f.statusFaturado || 'pendente') === 'sim'
            );
            
            // Ticket médio
            const ticketMedio = faturamentosDoMes.length > 0 
                ? faturamentosDoMes.reduce((sum, f) => sum + f.valor, 0) / faturamentosDoMes.length
                : 0;
            
            // Clientes ativos (com faturamento no mês)
            const clientesAtivos = new Set(faturamentosDoMes.map(f => f.cliente)).size;
            
            // Oportunidades abertas
            const oportunidadesAbertas = app.oportunidades.filter(o => o.etapa !== 'ganho').length;
            
            // Taxa de conversão (faturamentos do mês / oportunidades totais)
            const totalOportunidades = app.oportunidades.length;
            const taxaConversao = totalOportunidades > 0 
                ? ((faturamentosDoMes.length / totalOportunidades) * 100).toFixed(1)
                : 0;
            
            // Próximas visitas (próximos 7 dias)
            const hoje = new Date();
            const daqui7Dias = new Date(hoje);
            daqui7Dias.setDate(daqui7Dias.getDate() + 7);
            
            const proximasVisitas = app.visitasReunioes.filter(v => {
                const dataVisita = new Date(v.dataISO);
                return dataVisita >= hoje && dataVisita <= daqui7Dias;
            }).length;
            
            // Atualizar UI
            document.getElementById('ticketMedioDisplay').textContent = `R$ ${ticketMedio.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
            document.getElementById('qtdFaturamentosDisplay').textContent = `${faturamentosDoMes.length} vendas`;
            document.getElementById('clientesAtivosDisplay').textContent = clientesAtivos;
            document.getElementById('taxaConversaoDisplay').textContent = `${taxaConversao}%`;
            document.getElementById('oportunidadesDisplay').textContent = `${totalOportunidades} oportunidades`;
            document.getElementById('proximasVisitasDisplay').textContent = proximasVisitas;
        }

        function atualizarDashboard() {
            const tipoPeriodo = document.getElementById('filtroTipoPeriodo').value;
            
            if (tipoPeriodo === 'mes') {
                const mes = parseInt(document.getElementById('filtroMesDash').value);
                const meta = metas[mes];
                const faturamentoMes = app.faturamentos
                    .filter(f => new Date(f.data).getMonth() + 1 === mes && (f.statusFaturado || 'pendente') === 'sim')
                    .reduce((sum, f) => sum + f.valor, 0);
                const totalAnual = app.faturamentos
                    .filter(f => (f.statusFaturado || 'pendente') === 'sim')
                    .reduce((sum, f) => sum + f.valor, 0);
                const percentual = ((faturamentoMes / meta) * 100).toFixed(1);

                document.getElementById('metaMesDisplay').textContent = `R$ ${meta.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
                document.getElementById('nomeMetaMes').textContent = `${nomesMeses[mes]} 2026`;
                document.getElementById('faturamentoMesDisplay').textContent = `R$ ${faturamentoMes.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
                document.getElementById('percentualDisplay').textContent = `${percentual}%`;
                document.getElementById('totalAnualDisplay').textContent = `R$ ${totalAnual.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;

                atualizarTabelaFaturamentos(mes);
                calcularKPIs(mes);
            } else {
                // Ano completo
                const metaAnual = Object.values(metas).reduce((sum, m) => sum + m, 0);
                const faturamentoAnual = app.faturamentos
                    .filter(f => (f.statusFaturado || 'pendente') === 'sim')
                    .reduce((sum, f) => sum + f.valor, 0);
                const percentual = ((faturamentoAnual / metaAnual) * 100).toFixed(1);

                document.getElementById('metaMesDisplay').textContent = `R$ ${metaAnual.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
                document.getElementById('nomeMetaMes').textContent = 'Ano Completo 2026';
                document.getElementById('faturamentoMesDisplay').textContent = `R$ ${faturamentoAnual.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
                document.getElementById('percentualDisplay').textContent = `${percentual}%`;
                document.getElementById('totalAnualDisplay').textContent = `R$ ${faturamentoAnual.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;

                app.paginaFaturamentoAtual = 1; // Reset pagina ao mudar visão
                atualizarTabelaFaturamentosAno();
                calcularKPIs(3); // Mostrar KPIs do mês atual (março)
            }
            
            renderChart();
            renderizarPrevisaoCompras();
        }

        function atualizarTabelaFaturamentosAno() {
            const tbody = document.getElementById('tabelaFaturamentosDetalhados');
            document.getElementById('tituloFaturamentosDetalhados').textContent = `Faturamentos Inseridos - Ano Completo 2026`;

            if (app.faturamentos.length === 0) {
                tbody.innerHTML = '<tr><td colspan="11" style="text-align: center;">Nenhum faturamento inserido</td></tr>';
                document.getElementById('paginacaoFaturamentoContainer').innerHTML = '';
            } else {
                const totalFaturado = app.faturamentos
                    .filter(f => (f.statusFaturado || 'pendente') === 'sim')
                    .reduce((sum, f) => sum + f.valor, 0);

                // Paginação
                const totalItens = app.faturamentos.length;
                const inicio = (app.paginaFaturamentoAtual - 1) * app.itensPorPagina;
                const faturamentosPaginados = app.faturamentos.slice(inicio, inicio + app.itensPorPagina);
                
                tbody.innerHTML = faturamentosPaginados.map((f, idx) => {
                    const clienteData = app.clientes[f.cliente];
                    const erp = clienteData ? clienteData.erp : f.erp;
                    const indiceReal = app.faturamentos.indexOf(f);
                    const statusFaturado = f.statusFaturado || 'pendente';
                    return `
                    <tr>
                        <td>${new Date(f.data).toLocaleDateString('pt-BR')}</td>
                        <td><strong>${f.pedidoHaco || '-'}</strong></td>
                        <td>${f.cliente}</td>
                        <td><strong>${erp || '-'}</strong></td>
                        <td>R$ ${f.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                        <td>${f.vendedor || '-'}</td>
                        <td>${f.notaFiscal || '-'}</td>
                        <td>${f.codigoEtiqueta || '-'}</td>
                        <td style="font-size:12px">${f.statusPedido || '-'}</td>
                        <td>${f.dataEntrega ? (isNaN(new Date(f.dataEntrega)) ? f.dataEntrega : new Date(f.dataEntrega).toLocaleDateString('pt-BR')) : '-'}</td>
                        <td style="display: flex; gap: 10px; align-items: center;">
                            <select onchange="mudarStatusFaturamento(${indiceReal}, this.value)" style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 4px; background: var(--bg-secondary); color: var(--text); font-size: 14px;">
                                <option value="pendente" ${statusFaturado === 'pendente' ? 'selected' : ''}>⏳ Pendente</option>
                                <option value="sim" ${statusFaturado === 'sim' ? 'selected' : ''}>✅ Faturado</option>
                                <option value="nao" ${statusFaturado === 'nao' ? 'selected' : ''}>❌ Não Faturado</option>
                            </select>
                            <button class="btn-success" onclick="abrirModalEditarFaturamento(${indiceReal})">Editar</button>
                            <button class="btn-danger" onclick="deletarFaturamento(${indiceReal})">Deletar</button>
                        </td>
                    </tr>
                `}).join('');
                
                // Adicionar linha de total
                tbody.innerHTML += `
                    <tr style="background: rgba(0,0,0,0.05); font-weight: 600; border-top: 2px solid var(--border);">
                        <td colspan="4" style="text-align: right;">TOTAL GERAL:</td>
                        <td colspan="6">R$ ${totalFaturado.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                    </tr>
                `;

                // Renderiza controles de página
                renderizarControlesPaginacao(totalItens, atualizarTabelaFaturamentosAno);
            }
        }

        function atualizarTabelaFaturamentos(mes) {
            preencherFiltroClienteFaturamento();
            renderizarTabelaComFiltro(mes, '', '', '', '', '');
        }

        function renderChart() {
            const dados = {};
            for (let i = 1; i <= 12; i++) dados[i] = 0;
            
            // Contar apenas faturados (statusFaturado === 'sim')
            app.faturamentos.forEach(f => {
                if ((f.statusFaturado || 'pendente') === 'sim') {
                    const mes = new Date(f.data).getMonth() + 1;
                    dados[mes] += f.valor;
                }
            });

            const ctx = document.getElementById('chartFaturamento');
            if (window.chartInstance) window.chartInstance.destroy();

            window.chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: nomesMeses.slice(1),
                    datasets: [
                        {
                            label: 'Faturamento (R$)',
                            data: Object.values(dados),
                            backgroundColor: '#185FA5',
                            borderRadius: 4
                        },
                        {
                            label: 'Meta (R$)',
                            data: metasMensais,
                            backgroundColor: '#D85A30',
                            borderRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { 
                        legend: { 
                            display: true,
                            position: 'top'
                        } 
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: v => 'R$ ' + (v / 1000).toFixed(0) + 'K'
                            }
                        }
                    }
                }
            });
        }

        // Variável para armazenar o filtro atual
        let filtroClienteFaturamentoAtivo = '';

        function preencherFiltroClienteFaturamento() {
            const select = document.getElementById('filtroClienteFaturamento');
            select.innerHTML = '<option value="">Todos os clientes</option>';
            Object.keys(app.clientes).forEach(cliente => {
                select.innerHTML += `<option value="${cliente}">${cliente}</option>`;
            });
        }

        function aplicarFiltroFaturamento() {
            app.paginaFaturamentoAtual = 1; // Reset pagina ao filtrar
            filtroClienteFaturamentoAtivo = document.getElementById('filtroClienteFaturamento').value;
            const mes = parseInt(document.getElementById('filtroMesDash').value);
            const buscaPedido = document.getElementById('buscaPedidoFaturamento').value.toLowerCase();
            const filtroStatus = document.getElementById('filtroStatusFaturamento').value;
            const dataInicial = document.getElementById('filtroDataInicial').value;
            const dataFinal = document.getElementById('filtroDataFinal').value;
            renderizarTabelaComFiltro(mes, filtroClienteFaturamentoAtivo, buscaPedido, filtroStatus, dataInicial, dataFinal);
        }

        function limparFiltroFaturamento() {
            app.paginaFaturamentoAtual = 1; // Reset pagina ao limpar
            document.getElementById('filtroClienteFaturamento').value = '';
            document.getElementById('buscaPedidoFaturamento').value = '';
            document.getElementById('filtroStatusFaturamento').value = '';
            document.getElementById('filtroDataInicial').value = '';
            document.getElementById('filtroDataFinal').value = '';
            filtroClienteFaturamentoAtivo = '';
            const mes = parseInt(document.getElementById('filtroMesDash').value);
            renderizarTabelaComFiltro(mes, '', '', '', '', '');
        }

        // ── Estimativa de Próxima Compra ─────────────────────────────
        const RECORRENCIA_DIAS = { mensal: 30, bimestral: 60, trimestral: 90, semestral: 180, anual: 365 };

        function estimarProximaCompra(nomeCliente) {
            const dadosCliente = app.clientes[nomeCliente] || {};
            const recorrenciaFixa = dadosCliente.recorrencia;

            // Pega todos os pedidos do cliente ordenados por data
            const pedidos = app.faturamentos
                .filter(f => f.cliente === nomeCliente && f.data)
                .map(f => new Date(f.data + 'T00:00:00'))
                .sort((a, b) => a - b);

            const ultimoPedido = pedidos.length > 0 ? pedidos[pedidos.length - 1] : null;

            // Se tem recorrência fixa definida no cadastro
            if (recorrenciaFixa && RECORRENCIA_DIAS[recorrenciaFixa]) {
                const intervalo = RECORRENCIA_DIAS[recorrenciaFixa];
                const base = ultimoPedido || new Date();
                const est = new Date(base);
                est.setDate(est.getDate() + intervalo);
                // Se a estimativa já passou, projeta para o próximo ciclo
                const hoje = new Date(); hoje.setHours(0,0,0,0);
                while (est < hoje) est.setDate(est.getDate() + intervalo);
                return {
                    data: est,
                    confianca: 'alta',
                    intervaloMedio: intervalo,
                    totalPedidos: pedidos.length,
                    tipoPrevisao: recorrenciaFixa
                };
            }

            // Sem recorrência fixa: calcula pelo histórico
            if (pedidos.length < 2) {
                if (pedidos.length === 1) {
                    const est = new Date(pedidos[0]);
                    est.setDate(est.getDate() + 30);
                    return { data: est, confianca: 'baixa', intervaloMedio: 30, totalPedidos: 1, tipoPrevisao: 'historico' };
                }
                return null;
            }

            const intervalos = [];
            for (let i = 1; i < pedidos.length; i++) {
                const diff = Math.round((pedidos[i] - pedidos[i-1]) / (1000 * 60 * 60 * 24));
                if (diff > 0) intervalos.push(diff);
            }
            if (intervalos.length === 0) return null;

            let somaP = 0, somaW = 0;
            intervalos.forEach((v, i) => { const peso = i + 1; somaP += v * peso; somaW += peso; });
            const intervaloMedio = Math.round(somaP / somaW);

            const estimativa = new Date(ultimoPedido);
            estimativa.setDate(estimativa.getDate() + intervaloMedio);

            const confianca = pedidos.length >= 5 ? 'alta' : pedidos.length >= 3 ? 'media' : 'baixa';
            return { data: estimativa, confianca, intervaloMedio, totalPedidos: pedidos.length, tipoPrevisao: 'historico' };
        }

        function _renderEstimativa(nomeCliente) {
            const est = estimarProximaCompra(nomeCliente);
            if (!est) return '<span style="color:var(--text-muted);font-size:12px;">Sem dados</span>';

            const hoje = new Date();
            hoje.setHours(0,0,0,0);
            const dataEst = new Date(est.data);
            dataEst.setHours(0,0,0,0);
            const diffDias = Math.round((dataEst - hoje) / (1000 * 60 * 60 * 24));

            const dataFmt = est.data.toLocaleDateString('pt-BR');

            let cor, icone, badge;
            if (diffDias < 0) {
                cor = '#dc2626'; icone = '🔴';
                badge = `${Math.abs(diffDias)}d atraso`;
            } else if (diffDias <= 15) {
                cor = '#f59e0b'; icone = '🟡';
                badge = `em ${diffDias}d`;
            } else {
                cor = '#10b981'; icone = '🟢';
                badge = `em ${diffDias}d`;
            }

            const confLabel = { alta: '★★★', media: '★★☆', baixa: '★☆☆' }[est.confianca];
            const confTip = `Baseado em ${est.totalPedidos} pedidos · Intervalo médio: ${est.intervaloMedio} dias`;

            return `
                <div style="display:flex;flex-direction:column;gap:2px;" title="${confTip}">
                    <span style="font-weight:700;color:${cor};font-size:13px;">${icone} ${dataFmt}</span>
                    <span style="font-size:11px;color:var(--text-secondary);">${badge} · ${confLabel}</span>
                </div>`;
        }

        // ── Estado do mês selecionado na Previsão ────────────────────
        let _prevAno  = new Date().getFullYear();
        let _prevMes  = new Date().getMonth() + 1; // 1-12

        function prevMesPrevisao() {
            if (_prevMes === 1) { _prevMes = 12; _prevAno--; }
            else _prevMes--;
            renderizarPrevisaoCompras();
        }
        function nextMesPrevisao() {
            if (_prevMes === 12) { _prevMes = 1; _prevAno++; }
            else _prevMes++;
            renderizarPrevisaoCompras();
        }
        function irParaHojePrevisao() {
            _prevAno = new Date().getFullYear();
            _prevMes = new Date().getMonth() + 1;
            renderizarPrevisaoCompras();
        }

        function renderizarPrevisaoCompras() {
            const cont = document.getElementById('tabelaPrevisaoCompras');
            const labelEl = document.getElementById('labelMesPrevisao');
            const resumoEl = document.getElementById('resumoMesPrevisao');
            if (!cont) return;

            const nomesMeses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
            const recorrenciaLabel = { mensal:'Mensal', bimestral:'Bimestral', trimestral:'Trimestral', semestral:'Semestral', anual:'Anual' };
            const hoje = new Date(); hoje.setHours(0,0,0,0);

            if (labelEl) labelEl.textContent = `${nomesMeses[_prevMes-1]} ${_prevAno}`;

            // Coleta clientes: com pedidos OU com recorrência fixa definida
            const clientesParaEstimar = new Set([
                ...app.faturamentos.map(f => f.cliente),
                ...Object.entries(app.clientes).filter(([,d]) => d.recorrencia).map(([n]) => n)
            ]);

            if (clientesParaEstimar.size === 0) {
                cont.innerHTML = '<p style="color:var(--text-muted);font-size:13px;">Nenhum cliente com recorrência definida ou faturamentos registrados.</p>';
                if (resumoEl) resumoEl.textContent = '';
                return;
            }

            // Filtra estimativas que caem no mês/ano selecionado
            const chaveAlvo = `${_prevAno}-${String(_prevMes).padStart(2,'0')}`;
            const itens = [];
            clientesParaEstimar.forEach(cliente => {
                const est = estimarProximaCompra(cliente);
                if (!est) return;
                const d = est.data;
                const chave = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
                if (chave === chaveAlvo) itens.push({ cliente, est });
            });
            itens.sort((a,b) => a.est.data - b.est.data);

            if (resumoEl) {
                if (itens.length === 0) {
                    resumoEl.textContent = 'Nenhuma previsão para este mês';
                } else {
                    let totalEst = 0;
                    itens.forEach(({ cliente }) => {
                        const peds = app.faturamentos.filter(f => f.cliente === cliente);
                        if (peds.length) totalEst += peds.reduce((a,b) => a+b.valor,0)/peds.length;
                    });
                    resumoEl.innerHTML = `<b>${itens.length}</b> cliente${itens.length>1?'s':''}${totalEst > 0 ? ' · Valor est.: <b>R$ '+totalEst.toLocaleString('pt-BR',{minimumFractionDigits:2})+'</b>' : ''}`;
                }
            }

            if (itens.length === 0) {
                cont.innerHTML = `<div style="padding:32px;text-align:center;color:var(--text-muted);">
                    <div style="font-size:36px;margin-bottom:10px;">📭</div>
                    <div style="font-weight:600;margin-bottom:6px;">Nenhuma previsão para ${nomesMeses[_prevMes-1]}</div>
                    <div style="font-size:13px;">Navegue para outro mês ou defina ciclos de recorrência nos clientes.</div>
                </div>`;
                return;
            }

            let html = `<div style="overflow-x:auto;"><table style="margin-top:0;"><thead><tr>
                <th>Cliente</th><th>Data Estimada</th><th>Dias Restantes</th>
                <th>Ciclo</th><th>Pedidos</th><th>Valor Médio Est.</th>
                <th>Tipo Previsão</th><th>Confiança</th>
            </tr></thead><tbody>`;

            itens.forEach(({ cliente, est }) => {
                const dataEst = new Date(est.data); dataEst.setHours(0,0,0,0);
                const diffDias = Math.round((dataEst - hoje) / (1000*60*60*24));
                const peds = app.faturamentos.filter(f => f.cliente === cliente);
                const mediaValor = peds.length ? peds.reduce((a,b) => a+b.valor,0)/peds.length : 0;

                let corDiff, ico;
                if (diffDias < 0)       { corDiff='#dc2626'; ico='🔴'; }
                else if (diffDias <= 15) { corDiff='#f59e0b'; ico='🟡'; }
                else                     { corDiff='#10b981'; ico='🟢'; }

                const diffTxt = diffDias < 0
                    ? `<span style="color:#dc2626;font-weight:700;">${Math.abs(diffDias)}d atraso</span>`
                    : `<span style="color:${corDiff};font-weight:700;">${diffDias}d</span>`;

                const confLabel = {alta:'★★★ Alta',media:'★★☆ Média',baixa:'★☆☆ Baixa'}[est.confianca];
                const confCor   = {alta:'#10b981',media:'#f59e0b',baixa:'#94a3b8'}[est.confianca];
                const tipoLabel = est.tipoPrevisao === 'historico' ? '📊 Histórico' : `🔄 ${recorrenciaLabel[est.tipoPrevisao]||est.tipoPrevisao}`;
                const tipoCor   = est.tipoPrevisao === 'historico' ? 'var(--text-secondary)' : 'var(--primary)';

                html += `<tr>
                    <td><strong>${cliente}</strong></td>
                    <td style="font-weight:700;color:${corDiff};">${ico} ${est.data.toLocaleDateString('pt-BR')}</td>
                    <td>${diffTxt}</td>
                    <td style="color:var(--text-secondary);">${est.intervaloMedio} dias</td>
                    <td style="text-align:center;">${est.totalPedidos||'—'}</td>
                    <td>${mediaValor>0?'R$ '+mediaValor.toLocaleString('pt-BR',{minimumFractionDigits:2}):'<span style="color:var(--text-muted)">Sem histórico</span>'}</td>
                    <td style="color:${tipoCor};font-weight:600;">${tipoLabel}</td>
                    <td style="color:${confCor};font-weight:600;">${confLabel}</td>
                </tr>`;
            });

            html += `</tbody></table></div>`;
            cont.innerHTML = html;
        }


        function renderizarTabelaComFiltro(mes, clienteFiltro, buscaPedido = '', filtroStatus = '', dataInicial = '', dataFinal = '') {
            let faturamentosFiltrados = app.faturamentos.filter(f => new Date(f.data).getMonth() + 1 === mes);
            
            // Aplicar filtro de cliente se houver
            if (clienteFiltro) {
                faturamentosFiltrados = faturamentosFiltrados.filter(f => f.cliente === clienteFiltro);
            }
            
            // Aplicar busca de pedido se houver
            if (buscaPedido) {
                faturamentosFiltrados = faturamentosFiltrados.filter(f => 
                    (f.pedidoHaco || '').toLowerCase().includes(buscaPedido)
                );
            }
            
            // Aplicar filtro de status se houver
            if (filtroStatus) {
                faturamentosFiltrados = faturamentosFiltrados.filter(f => 
                    (f.statusFaturado || 'pendente') === filtroStatus
                );
            }
            
            // Aplicar filtro de data se houver
            if (dataInicial) {
                faturamentosFiltrados = faturamentosFiltrados.filter(f => f.data >= dataInicial);
            }
            if (dataFinal) {
                faturamentosFiltrados = faturamentosFiltrados.filter(f => f.data <= dataFinal);
            }

            const tbody = document.getElementById('tabelaFaturamentosDetalhados');
            const nomesMeses = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            
            let titulo = `Faturamentos Inseridos - ${nomesMeses[mes]} 2026`;
            if (clienteFiltro) titulo += ` (${clienteFiltro})`;
            if (buscaPedido) titulo += ` - Pedido: ${buscaPedido}`;
            if (filtroStatus) {
                const statusTexto = filtroStatus === 'sim' ? 'Faturados' : filtroStatus === 'nao' ? 'Não Faturados' : 'Pendentes';
                titulo += ` - ${statusTexto}`;
            }
            document.getElementById('tituloFaturamentosDetalhados').textContent = titulo;

            if (faturamentosFiltrados.length === 0) {
                tbody.innerHTML = '<tr><td colspan="11" style="text-align: center;">Nenhum faturamento encontrado com os filtros aplicados</td></tr>';
                document.getElementById('paginacaoFaturamentoContainer').innerHTML = '';
            } else {
                const totalFaturado = faturamentosFiltrados
                    .filter(f => (f.statusFaturado || 'pendente') === 'sim')
                    .reduce((sum, f) => sum + f.valor, 0);

                // Paginação
                const totalItens = faturamentosFiltrados.length;
                const inicio = (app.paginaFaturamentoAtual - 1) * app.itensPorPagina;
                const faturamentosPaginados = faturamentosFiltrados.slice(inicio, inicio + app.itensPorPagina);
                
                tbody.innerHTML = faturamentosPaginados.map(f => {
                    const indiceReal = app.faturamentos.indexOf(f);
                    const clienteData = app.clientes[f.cliente];
                    const erp = clienteData ? clienteData.erp : f.erp;
                    const statusFaturado = f.statusFaturado || 'pendente';
                    return `
                    <tr>
                        <td>${new Date(f.data).toLocaleDateString('pt-BR')}</td>
                        <td><strong>${f.pedidoHaco || '-'}</strong></td>
                        <td>${f.cliente}</td>
                        <td><strong>${erp || '-'}</strong></td>
                        <td>R$ ${f.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                        <td>${f.vendedor || '-'}</td>
                        <td>${f.notaFiscal || '-'}</td>
                        <td>${f.codigoEtiqueta || '-'}</td>
                        <td style="font-size:11px">${f.statusPedido || '-'}</td>
                        <td>${f.dataEntrega ? (isNaN(new Date(f.dataEntrega)) ? f.dataEntrega : new Date(f.dataEntrega).toLocaleDateString('pt-BR')) : '-'}</td>
                        <td style="display: flex; gap: 10px; align-items: center;">
                            <select onchange="mudarStatusFaturamento(${indiceReal}, this.value)" style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 4px; background: var(--bg-secondary); color: var(--text); font-size: 14px;">
                                <option value="pendente" ${statusFaturado === 'pendente' ? 'selected' : ''}>⏳ Pendente</option>
                                <option value="sim" ${statusFaturado === 'sim' ? 'selected' : ''}>✅ Faturado</option>
                                <option value="nao" ${statusFaturado === 'nao' ? 'selected' : ''}>❌ Não Faturado</option>
                            </select>
                            <button class="btn-success" onclick="abrirModalEditarFaturamento(${indiceReal})">Editar</button>
                            <button class="btn-danger" onclick="deletarFaturamento(${indiceReal})">Deletar</button>
                        </td>
                    </tr>
                `}).join('');

                tbody.innerHTML += `
                    <tr style="background: rgba(0,0,0,0.05); font-weight: 600; border-top: 2px solid var(--border);">
                        <td colspan="4" style="text-align: right;">TOTAL FILTRADO:</td>
                        <td colspan="6">R$ ${totalFaturado.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
                    </tr>
                `;

                // Renderiza controles de página
                const _mesAtual = mes, _cliAtual = clienteFiltro, _busAtual = buscaPedido, _stAtual = filtroStatus, _diAtual = dataInicial, _dfAtual = dataFinal;
                renderizarControlesPaginacao(totalItens, () => renderizarTabelaComFiltro(_mesAtual, _cliAtual, _busAtual, _stAtual, _diAtual, _dfAtual));
            }
        }

        // ================================================================
        // PAGINAÇÃO DASHBOARD
        // ================================================================
        // Estado salvo da última chamada para re-renderizar ao mudar de página
        let _paginacaoCallbackAtual = null;

        function renderizarControlesPaginacao(totalItens, callbackFn) {
            const container = document.getElementById('paginacaoFaturamentoContainer');
            if (!container) return;

            // Salva o callback para uso em mudarPaginaFaturamento
            _paginacaoCallbackAtual = callbackFn;
            
            const totalPaginas = Math.ceil(totalItens / app.itensPorPagina);
            if (totalPaginas <= 1) {
                container.innerHTML = '';
                return;
            }

            const atual = app.paginaFaturamentoAtual;

            let html = `<div class="pagination-container">`;
            html += `<button class="page-btn" ${atual === 1 ? 'disabled' : ''} onclick="mudarPaginaFaturamento(${atual - 1})">❮</button>`;

            // Mostrar até 5 páginas ao redor da atual
            let start = Math.max(1, atual - 2);
            let end = Math.min(totalPaginas, start + 4);
            if (end - start < 4) start = Math.max(1, end - 4);

            for (let i = start; i <= end; i++) {
                html += `<button class="page-btn ${i === atual ? 'active' : ''}" onclick="mudarPaginaFaturamento(${i})">${i}</button>`;
            }

            html += `<div class="page-info">Página <b>${atual}</b> de <b>${totalPaginas}</b></div>`;
            html += `<button class="page-btn" ${atual === totalPaginas ? 'disabled' : ''} onclick="mudarPaginaFaturamento(${atual + 1})">❯</button>`;
            html += `</div>`;
            
            container.innerHTML = html;
        }

        function mudarPaginaFaturamento(novaPagina) {
            app.paginaFaturamentoAtual = novaPagina;
            
            // Re-executa o callback armazenado
            if (typeof _paginacaoCallbackAtual === 'function') {
                _paginacaoCallbackAtual();
            }

            // Scroll suave para o topo da tabela
            const titulo = document.getElementById('tituloFaturamentosDetalhados');
            if (titulo) titulo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function preencherClientesFaturamento() {
            const select = document.getElementById('clienteSelect');
            select.innerHTML = '<option value="">Selecione um cliente...</option>';
            Object.keys(app.clientes).forEach(cliente => {
                select.innerHTML += `<option value="${cliente}">${cliente}</option>`;
            });
            
            // Também preencher select de relatórios
            const selectRelatorio = document.getElementById('clienteRelatorio');
            if (selectRelatorio) {
                selectRelatorio.innerHTML = '<option value="">Todos os clientes</option>';
                Object.keys(app.clientes).forEach(cliente => {
                    selectRelatorio.innerHTML += `<option value="${cliente}">${cliente}</option>`;
                });
            }
        }

        function atualizarErp() {
            const cliente = document.getElementById('clienteSelect').value;
            const dados = app.clientes[cliente];
            const erp = dados ? dados.erp : '';
            document.getElementById('codErpInput').value = erp;
        }

        async function salvarFaturamento() {
            const cliente = document.getElementById('clienteSelect').value;
            const data = document.getElementById('dataFaturamento').value;
            const pedidoHaco = document.getElementById('pedidoHaco').value;
            const valor = parseFloat(document.getElementById('valorFaturamento').value);

            if (!cliente || !data || !valor) {
                alert('Preencha cliente, data e valor');
                return;
            }

            // Pega o ERP do cliente cadastrado
            const clienteData = app.clientes[cliente];
            const erp = clienteData ? clienteData.erp : '';

            if (!erp) {
                alert('Cliente não possui código ERP cadastrado');
                return;
            }

            const novoFat = {
                cliente, erp, valor, data,
                pedidoHaco: pedidoHaco || '-',
                vendedor: '-', notaFiscal: '-',
                codigoEtiqueta: '-', statusPedido: 'pendente', dataEntrega: '-'
            };

            app.faturamentos.push(novoFat);
            atualizarDashboard();

            try {
                await salvar();

                document.getElementById('resultadoFaturamento').innerHTML = `<div style="padding: 16px; border-radius: 6px; background: #f5faf0; border-left: 4px solid var(--success);">✓ ${cliente} (${erp}) - R$ ${valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})} registrado!${pedidoHaco ? ` | Pedido: ${pedidoHaco}` : ''}</div>`;
                document.getElementById('resultadoFaturamento').style.display = 'block';

                document.getElementById('clienteSelect').value = '';
                document.getElementById('codErpInput').value = '';
                document.getElementById('dataFaturamento').value = '';
                document.getElementById('pedidoHaco').value = '';
                document.getElementById('valorFaturamento').value = '';

                setTimeout(() => { document.getElementById('resultadoFaturamento').style.display = 'none'; }, 3000);
            } catch (err) {
                // Rollback: remove o item inserido
                app.faturamentos.pop();
                localStorage.setItem('faturamentos', JSON.stringify(app.faturamentos));
                atualizarDashboard();
                alert('❌ Erro ao salvar no banco de dados. Verifique sua conexão e tente novamente.');
            }
        }

        // CLIENTES
        function openModalCadastroCliente() {
            document.getElementById('modalCadastroCliente').classList.add('active');
        }

        function closeModalCadastroCliente() {
            document.getElementById('modalCadastroCliente').classList.remove('active');
        }

        async function salvarClienteNovo() {
            const nome = document.getElementById('nomeCliente').value;
            const erp = document.getElementById('erpCliente').value;
            const cidade = document.getElementById('cidadeCliente').value;
            const estado = document.getElementById('estadoCliente').value;
            const recorrencia = document.getElementById('recorrenciaCliente').value;

            if (!nome || !erp || !cidade || !estado) {
                alert('Preencha todos os campos');
                return;
            }

            app.clientes[nome] = {erp, cidade, estado, recorrencia};
            preencherClientesFaturamento();
            preencherClientesAgendamento();
            atualizarTabelaClientes();

            try {
                await salvar();
                closeModalCadastroCliente();
                document.getElementById('nomeCliente').value = '';
                document.getElementById('erpCliente').value = '';
                document.getElementById('cidadeCliente').value = '';
                document.getElementById('estadoCliente').value = '';
                document.getElementById('recorrenciaCliente').value = '';
            } catch (err) {
                // Rollback
                delete app.clientes[nome];
                localStorage.setItem('clientes', JSON.stringify(app.clientes));
                preencherClientesFaturamento();
                preencherClientesAgendamento();
                atualizarTabelaClientes();
                alert('❌ Erro ao salvar cliente no banco. Operação revertida.');
            }
        }

        let nomeClienteEmEdicao = null;

        function abrirModalEditarCliente(nome) {
            nomeClienteEmEdicao = nome;
            const dados = app.clientes[nome];
            document.getElementById('nomeClienteEditar').value = nome;
            document.getElementById('erpClienteEditar').value = dados.erp;
            document.getElementById('cidadeClienteEditar').value = dados.cidade;
            document.getElementById('estadoClienteEditar').value = dados.estado;
            document.getElementById('recorrenciaClienteEditar').value = dados.recorrencia || '';
            document.getElementById('modalEditarCliente').classList.add('active');
        }

        function closeModalEditarCliente() {
            document.getElementById('modalEditarCliente').classList.remove('active');
            nomeClienteEmEdicao = null;
        }

        async function salvarClienteEditado() {
            const nomeNovo = document.getElementById('nomeClienteEditar').value;
            const erp = document.getElementById('erpClienteEditar').value;
            const cidade = document.getElementById('cidadeClienteEditar').value;
            const estado = document.getElementById('estadoClienteEditar').value;
            const recorrencia = document.getElementById('recorrenciaClienteEditar').value;

            if (!nomeNovo || !erp || !cidade || !estado) {
                alert('Preencha todos os campos');
                return;
            }

            // Snapshot para rollback
            const snapshotClientes = JSON.parse(JSON.stringify(app.clientes));
            const snapshotFaturamentos = JSON.parse(JSON.stringify(app.faturamentos));

            if (nomeNovo !== nomeClienteEmEdicao) {
                delete app.clientes[nomeClienteEmEdicao];
                app.faturamentos.forEach(f => {
                    if (f.cliente === nomeClienteEmEdicao) f.cliente = nomeNovo;
                });
            }

            app.clientes[nomeNovo] = {erp, cidade, estado, recorrencia, pre_cadastro: false};
            preencherClientesFaturamento();
            preencherClientesAgendamento();
            atualizarTabelaClientes();
            atualizarDashboard();

            try {
                await salvar();
                closeModalEditarCliente();
                alert('Cliente atualizado com sucesso!');
            } catch (err) {
                // Rollback
                app.clientes = snapshotClientes;
                app.faturamentos = snapshotFaturamentos;
                localStorage.setItem('clientes', JSON.stringify(app.clientes));
                localStorage.setItem('faturamentos', JSON.stringify(app.faturamentos));
                preencherClientesFaturamento();
                preencherClientesAgendamento();
                atualizarTabelaClientes();
                atualizarDashboard();
                alert('❌ Erro ao atualizar cliente no banco. Alterações revertidas.');
            }
        }

        function atualizarTabelaClientes() {
            const tbody = document.getElementById('tabelaClientes');
            const clientes = Object.entries(app.clientes);
            const recorrenciaLabels = {
                mensal: '📅 Mensal', bimestral: '📅 Bimestral',
                trimestral: '📅 Trimestral', semestral: '📅 Semestral', anual: '📅 Anual'
            };

            if (clientes.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" style="text-align: center;">Nenhum cliente cadastrado</td></tr>';
            } else {
                tbody.innerHTML = clientes.map(([nome, dados], idx) => {
                    const rowBg = dados.pre_cadastro ? 'background-color: #fff3cd;' : '';
                    const alertIcon = dados.pre_cadastro ? '<span title="Pré-cadastro: complete as informações" style="cursor:help;">⚠️</span> ' : '';
                    const btnLabel = dados.pre_cadastro ? '📝 Completar' : 'Editar';
                    const erpDisplay = dados.erp || '<span style="color:#d32f2f; font-size:11px;">Sem ERP</span>';
                    
                    return `
                    <tr style="${rowBg}">
                        <td style="font-weight: 600; text-align: center; width: 40px;">${idx + 1}</td>
                        <td>${alertIcon}${nome}</td>
                        <td><strong>${erpDisplay}</strong></td>
                        <td>${dados.cidade}</td>
                        <td>${dados.estado}</td>
                        <td>
                            ${dados.recorrencia
                                ? `<span style="background:var(--primary-light);color:var(--primary);padding:3px 10px;border-radius:20px;font-size:12px;font-weight:700;">${recorrenciaLabels[dados.recorrencia] || dados.recorrencia}</span>`
                                : `<span style="color:var(--text-muted);font-size:12px;">Por histórico</span>`}
                        </td>
                        <td style="display: flex; gap: 10px;">
                            <button class="btn-success" onclick="abrirModalEditarCliente('${nome.replace(/'/g,"\\'")}')">${btnLabel}</button>
                            <button class="btn-danger" onclick="deletarCliente('${nome.replace(/'/g,"\\'")}')">Deletar</button>
                        </td>
                    </tr>
                    `;
                }).join('');

                tbody.innerHTML += `
                    <tr style="background: rgba(0,0,0,0.05); font-weight: 600; border-top: 2px solid var(--border);">
                        <td colspan="2" style="text-align: right;">Total de Clientes:</td>
                        <td colspan="5" style="text-align: left;"><strong>${clientes.length} cliente${clientes.length > 1 ? 's' : ''}</strong></td>
                    </tr>`;
            }
        }

        async function deletarCliente(nome) {
            if (!confirm(`Deletar cliente ${nome}?`)) return;

            const snapshotCliente = app.clientes[nome];
            delete app.clientes[nome];
            localStorage.setItem('clientes', JSON.stringify(app.clientes));
            preencherClientesFaturamento();
            preencherClientesAgendamento();
            atualizarTabelaClientes();

            try {
                await salvar();
            } catch (err) {
                // Rollback
                app.clientes[nome] = snapshotCliente;
                localStorage.setItem('clientes', JSON.stringify(app.clientes));
                preencherClientesFaturamento();
                preencherClientesAgendamento();
                atualizarTabelaClientes();
                alert('❌ Erro ao deletar cliente no banco. Operação revertida.');
            }
        }

        // FATURAMENTOS
        let faturamentoEmEdicao = null;

        function abrirModalEditarFaturamento(indice) {
            const fat = app.faturamentos[indice];
            const clienteData = app.clientes[fat.cliente];
            const erp = clienteData ? clienteData.erp : fat.erp;
            
            faturamentoEmEdicao = indice;
            document.getElementById('clienteFaturamentoEditar').value = fat.cliente;
            document.getElementById('erpFaturamentoEditar').value = erp;
            document.getElementById('dataFaturamentoEditar').value = fat.data;
            document.getElementById('pedidoHacoEditar').value = fat.pedidoHaco || '';
            document.getElementById('valorFaturamentoEditar').value = fat.valor;
            document.getElementById('vendedorFaturamentoEditar').value = fat.vendedor || '';
            document.getElementById('notaFaturamentoEditar').value = fat.notaFiscal || '';
            document.getElementById('etiquetaFaturamentoEditar').value = fat.codigoEtiqueta || '';
            document.getElementById('statusPedFaturamentoEditar').value = fat.statusPedido || '';
            document.getElementById('entregaFaturamentoEditar').value = fat.dataEntrega || '';
            
            document.getElementById('modalEditarFaturamento').classList.add('active');
        }

        function closeModalEditarFaturamento() {
            document.getElementById('modalEditarFaturamento').classList.remove('active');
            faturamentoEmEdicao = null;
        }

        async function salvarFaturamentoEditado() {
            if (faturamentoEmEdicao === null) return;

            const data = document.getElementById('dataFaturamentoEditar').value;
            const pedidoHaco = document.getElementById('pedidoHacoEditar').value;
            const valor = parseFloat(document.getElementById('valorFaturamentoEditar').value);
            const vendedor = document.getElementById('vendedorFaturamentoEditar').value;
            const notaFiscal = document.getElementById('notaFaturamentoEditar').value;
            const codigoEtiqueta = document.getElementById('etiquetaFaturamentoEditar').value;
            const statusPedido = document.getElementById('statusPedFaturamentoEditar').value;
            const dataEntrega = document.getElementById('entregaFaturamentoEditar').value;

            if (!data || !valor) {
                alert('Preencha os campos obrigatórios (Data e Valor)');
                return;
            }

            // Snapshot para rollback
            const idx = faturamentoEmEdicao;
            const snapshot = { ...app.faturamentos[idx] };

            app.faturamentos[idx].data = data;
            app.faturamentos[idx].pedidoHaco = pedidoHaco || '-';
            app.faturamentos[idx].valor = valor;
            app.faturamentos[idx].vendedor = vendedor;
            app.faturamentos[idx].notaFiscal = notaFiscal;
            app.faturamentos[idx].codigoEtiqueta = codigoEtiqueta;
            app.faturamentos[idx].statusPedido = statusPedido;
            app.faturamentos[idx].dataEntrega = dataEntrega;

            try {
                await salvar();
                atualizarDashboard();
                closeModalEditarFaturamento();
                alert('✓ Faturamento atualizado com sucesso!');
            } catch (err) {
                // Rollback
                app.faturamentos[idx] = snapshot;
                localStorage.setItem('faturamentos', JSON.stringify(app.faturamentos));
                atualizarDashboard();
                alert('❌ Erro ao atualizar no banco de dados. As alterações foram revertidas.');
            }
        }

        async function mudarStatusFaturamento(indice, novoStatus) {
            const statusAnterior = app.faturamentos[indice].statusFaturado;
            app.faturamentos[indice].statusFaturado = novoStatus;
            try {
                await salvar();
                atualizarDashboard();
            } catch (err) {
                // Rollback
                app.faturamentos[indice].statusFaturado = statusAnterior;
                localStorage.setItem('faturamentos', JSON.stringify(app.faturamentos));
                alert('❌ Erro ao salvar status no banco. Alteração revertida.');
            }
        }

        async function deletarFaturamento(indice) {
            const fat = app.faturamentos[indice];
            if (!confirm(`Deletar faturamento de ${fat.cliente} no valor de R$ ${fat.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}?`)) return;

            // 1. Remove do array local temporariamente
            const [removido] = app.faturamentos.splice(indice, 1);

            // 2. Persiste no localStorage imediatamente
            localStorage.setItem('faturamentos', JSON.stringify(app.faturamentos));
            localStorage.setItem('projetos', JSON.stringify(app.projetos));
            localStorage.setItem('visitas', JSON.stringify(app.visitas));
            localStorage.setItem('clientes', JSON.stringify(app.clientes));
            localStorage.setItem('oportunidades', JSON.stringify(app.oportunidades));
            localStorage.setItem('visitasReunioes', JSON.stringify(app.visitasReunioes || []));

            // 3. Atualiza UI otimisticamente
            atualizarDashboard();

            // 4. Sincroniza com o backend e aguarda confirmação
            try {
                const payload = {
                    faturamentos: app.faturamentos,
                    clientes: app.clientes,
                    projetos: app.projetos,
                    visitas: app.visitas,
                    oportunidades: app.oportunidades,
                    visitasReunioes: app.visitasReunioes || []
                };
                const response = await fetch('/api/sync', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                _dbSetStatus('conectado', '✅ Salvo no Banco');
            } catch (err) {
                // 5. Se falhou na API: reverte o delete
                console.error('Erro ao deletar faturamento no backend:', err);
                app.faturamentos.splice(indice, 0, removido); // Reinsere no lugar original
                localStorage.setItem('faturamentos', JSON.stringify(app.faturamentos));
                atualizarDashboard();
                _dbSetStatus('erro', '❌ Falha API');
                alert('❌ Erro ao deletar no banco de dados. O registro foi restaurado.\nVerifique sua conexão e tente novamente.');
            }
        }

        // PROJETOS E VISITAS
        function preencherClientesAgendamento() {
            const select = document.getElementById('clienteAgendamento');
            select.innerHTML = '<option value="">Selecione um cliente...</option>';
            Object.keys(app.clientes).forEach(cliente => {
                select.innerHTML += `<option value="${cliente}">${cliente}</option>`;
            });
        }

        function atualizarDadosAgendamento() {
            const cliente = document.getElementById('clienteAgendamento').value;
            const dados = app.clientes[cliente];
            
            if (dados) {
                document.getElementById('erpAgendamento').value = dados.erp;
                document.getElementById('cidadeAgendamento').value = dados.cidade;
                document.getElementById('estadoAgendamento').value = dados.estado;
                document.getElementById('erpAgendamentoContainer').style.display = 'block';
            } else {
                document.getElementById('erpAgendamentoContainer').style.display = 'none';
            }
        }

        function openModalAgendamento(tipo = 'novo_projeto') {
            document.getElementById('modalAgendamento').classList.add('active');
            document.getElementById('dataAgendamento').valueAsDate = new Date();
            
            // Define o tipo de cliente padrão baseado na seção
            if (tipo === 'novo_projeto') {
                document.getElementById('tipocliente').value = 'novo';
            } else if (tipo === 'visita') {
                document.getElementById('tipocliente').value = 'carteira';
            }
            atualizarOpcoesCliente();
        }

        function closeModalAgendamento() {
            document.getElementById('modalAgendamento').classList.remove('active');
        }

        function atualizarOpcoesCliente() {
            const tipo = document.getElementById('tipocliente').value;
            const selectCliente = document.getElementById('clienteAgendamento');
            const inputNovo = document.getElementById('novoClienteInput');
            const labelCliente = document.getElementById('labelCliente');
            const tipoVisitaContainer = document.getElementById('tipoVisitaContainer');
            const statusProjetoContainer = document.getElementById('statusProjetoContainer');
            const statusVisitaContainer = document.getElementById('statusVisitaContainer');

            if (tipo === 'carteira') {
                selectCliente.style.display = 'block';
                inputNovo.style.display = 'none';
                labelCliente.textContent = 'Cliente da Carteira';
                tipoVisitaContainer.classList.remove('hidden');
                statusProjetoContainer.classList.add('hidden');
                statusVisitaContainer.classList.remove('hidden');
                preencherClientesAgendamento();
            } else if (tipo === 'novo') {
                selectCliente.style.display = 'none';
                inputNovo.style.display = 'block';
                labelCliente.textContent = 'Nome do Novo Cliente';
                tipoVisitaContainer.classList.add('hidden');
                statusProjetoContainer.classList.remove('hidden');
                statusVisitaContainer.classList.add('hidden');
                document.getElementById('erpAgendamentoContainer').style.display = 'none';
                inputNovo.value = '';
            }
        }

        async function confirmarAgendamento() {
            const tipo = document.getElementById('tipocliente').value;
            const cliente = tipo === 'carteira' ? document.getElementById('clienteAgendamento').value : document.getElementById('novoClienteInput').value;
            const data = document.getElementById('dataAgendamento').value;
            const hora = document.getElementById('horaAgendamento').value;
            const cidade = document.getElementById('cidadeAgendamento').value;
            const estado = document.getElementById('estadoAgendamento').value;
            const obs = document.getElementById('obsAgendamento').value;
            
            // Novos campos de contato
            const nomeContato = document.getElementById('nomeContatoAgendamento').value;
            const cargoContato = document.getElementById('cargoContatoAgendamento').value;
            const telefoneContato = document.getElementById('telefoneContatoAgendamento').value;
            const emailContato = document.getElementById('emailContatoAgendamento').value;

            if (!cliente || !data) {
                alert('Preencha cliente e data');
                return;
            }

            let novoItem = null;
            let colecao = null;

            if (tipo === 'carteira') {
                const tipoVisita = document.getElementById('tipoVisita').value;
                const statusVisita = document.getElementById('statusVisita').value;
                const erp = app.clientes[cliente]?.erp || '';
                
                novoItem = {
                    cliente, tipo: 'visita_carteira', tipoVisita, data, hora: hora || '', 
                    cidade, estado, status: statusVisita, obs: obs || '',
                    nomeContato, cargoContato, telefoneContato, emailContato,
                    erp, dataCriacao: new Date().toISOString(),
                    timeline: [{
                        data: new Date().toLocaleDateString('pt-BR'),
                        hora: new Date().toLocaleTimeString('pt-BR'),
                        evento: 'Visita Agendada',
                        descricao: `Visita agendada para ${new Date(data).toLocaleDateString('pt-BR')}`,
                        editavel: false
                    }]
                };
                if (obs && obs.trim()) {
                    novoItem.timeline.push({
                        data: new Date().toLocaleDateString('pt-BR'),
                        hora: new Date().toLocaleTimeString('pt-BR'),
                        evento: '\uD83D\uDCDD Observação Inicial',
                        descricao: obs, editavel: true
                    });
                }
                app.visitas.push(novoItem);
                colecao = 'visitas';
            } else {
                const status = document.getElementById('statusProjeto').value;
                const statusVisita = document.getElementById('statusVisita').value || 'agendada';
                novoItem = {
                    cliente, tipo: 'novo_projeto', data, hora: hora || '', 
                    cidade, estado, status, statusVisita, obs: obs || '',
                    nomeContato, cargoContato, telefoneContato, emailContato,
                    dataCriacao: new Date().toISOString(),
                    timeline: [{
                        data: new Date().toLocaleDateString('pt-BR'),
                        hora: new Date().toLocaleTimeString('pt-BR'),
                        evento: 'Projeto Criado',
                        descricao: `Novo projeto criado com etapa: ${status}`,
                        editavel: false
                    }]
                };
                if (obs && obs.trim()) {
                    novoItem.timeline.push({
                        data: new Date().toLocaleDateString('pt-BR'),
                        hora: new Date().toLocaleTimeString('pt-BR'),
                        evento: '\uD83D\uDCDD Observação Inicial',
                        descricao: obs, editavel: true
                    });
                }
                app.projetos.push(novoItem);
                app.visitas.push(novoItem);
                colecao = 'projetos';
            }

            renderCalendarVisitas();
            atualizarClientesCarteira();

            try {
                await salvar();
                closeModalAgendamento();
                // Limpar campos
                document.getElementById('tipocliente').value = '';
                document.getElementById('clienteAgendamento').value = '';
                document.getElementById('novoClienteInput').value = '';
                document.getElementById('dataAgendamento').value = '';
                document.getElementById('horaAgendamento').value = '';
                document.getElementById('cidadeAgendamento').value = '';
                document.getElementById('estadoAgendamento').value = '';
                document.getElementById('statusProjeto').value = 'novo';
                document.getElementById('statusVisita').value = 'agendada';
                document.getElementById('obsAgendamento').value = '';
                document.getElementById('nomeContatoAgendamento').value = '';
                document.getElementById('cargoContatoAgendamento').value = '';
                document.getElementById('telefoneContatoAgendamento').value = '';
                document.getElementById('emailContatoAgendamento').value = '';
                alert('✓ Visita/Projeto agendado com sucesso!');
            } catch (err) {
                // Rollback
                app.visitas.pop();
                if (colecao === 'projetos') app.projetos.pop();
                localStorage.setItem('visitas', JSON.stringify(app.visitas));
                localStorage.setItem('projetos', JSON.stringify(app.projetos));
                renderCalendarVisitas();
                atualizarClientesCarteira();
                alert('❌ Erro ao salvar no banco. Operação revertida.');
            }
        }

        function renderCalendar() {
            const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
            const calendarGrid = document.getElementById('calendarGrid');
            calendarGrid.innerHTML = '';

            const header = document.createElement('div');
            header.style.gridColumn = '1 / -1';
            header.style.background = 'var(--primary)';
            header.style.color = 'white';
            header.style.padding = '15px';
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.innerHTML = `
                <button onclick="mesAnterior()" style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 8px 12px; cursor: pointer; border-radius: 4px;">← </button>
                <strong>${nomesMeses[app.currentMonth]} ${app.currentYear}</strong>
                <button onclick="proximoMes()" style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 8px 12px; cursor: pointer; border-radius: 4px;"> →</button>
            `;
            calendarGrid.appendChild(header);

            dayNames.forEach(day => {
                const dayHeader = document.createElement('div');
                dayHeader.style.background = 'var(--light-bg)';
                dayHeader.style.padding = '10px';
                dayHeader.style.textAlign = 'center';
                dayHeader.style.fontWeight = '600';
                dayHeader.style.color = 'var(--text-secondary)';
                dayHeader.style.fontSize = '12px';
                dayHeader.textContent = day;
                calendarGrid.appendChild(dayHeader);
            });

            const firstDay = new Date(app.currentYear, app.currentMonth - 1, 1).getDay();
            const daysInMonth = new Date(app.currentYear, app.currentMonth, 0).getDate();
            const daysInPrevMonth = new Date(app.currentYear, app.currentMonth - 1, 0).getDate();

            for (let i = firstDay - 1; i >= 0; i--) {
                const day = document.createElement('div');
                day.style.background = 'var(--light-bg)';
                day.style.color = 'var(--text-secondary)';
                day.style.padding = '10px';
                day.textContent = daysInPrevMonth - i;
                calendarGrid.appendChild(day);
            }

            for (let i = 1; i <= daysInMonth; i++) {
                const day = document.createElement('div');
                day.style.background = 'white';
                day.style.padding = '10px';
                day.style.minHeight = '70px';
                day.style.cursor = 'pointer';
                day.style.fontSize = '12px';
                day.style.borderBottom = '1px solid var(--border)';

                const today = new Date();
                if (today.getDate() === i && today.getMonth() === app.currentMonth - 1 && today.getFullYear() === app.currentYear) {
                    day.style.background = '#f0f7ff';
                    day.style.border = '2px solid var(--primary)';
                }

                const dateStr = `${app.currentYear}-${String(app.currentMonth).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
                const eventosDodia = app.projetos.concat(app.visitas).filter(p => p.data === dateStr);

                const dayNumber = document.createElement('div');
                dayNumber.style.fontWeight = 'bold';
                dayNumber.style.marginBottom = '3px';
                dayNumber.textContent = i;
                day.appendChild(dayNumber);

                eventosDodia.forEach(ev => {
                    const event = document.createElement('div');
                    event.style.background = 'var(--primary)';
                    event.style.color = 'white';
                    event.style.padding = '2px 4px';
                    event.style.borderRadius = '2px';
                    event.style.fontSize = '10px';
                    event.style.margin = '2px 0';
                    event.textContent = (ev.hora ? ev.hora + ' - ' : '') + ev.cliente.substring(0, 12);
                    day.appendChild(event);
                });

                day.onclick = () => abrirModalComData(dateStr);
                calendarGrid.appendChild(day);
            }

            const totalCells = calendarGrid.children.length - 8;
            const remainingCells = 42 - totalCells;
            for (let i = 1; i <= remainingCells; i++) {
                const day = document.createElement('div');
                day.style.background = 'var(--light-bg)';
                day.style.color = 'var(--text-secondary)';
                day.style.padding = '10px';
                day.textContent = i;
                calendarGrid.appendChild(day);
            }

            atualizarProjetosExibicao();
            atualizarClientesCarteira();
        }

        function mesAnterior() {
            if (app.currentMonth === 1) { app.currentMonth = 12; app.currentYear--; } else { app.currentMonth--; }
            renderCalendar();
        }

        function proximoMes() {
            if (app.currentMonth === 12) { app.currentMonth = 1; app.currentYear++; } else { app.currentMonth++; }
            renderCalendar();
        }

        function renderCalendarVisitas() {
            const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
            const calendarGrid = document.getElementById('calendarGridVisitas');
            calendarGrid.innerHTML = '';

            const header = document.createElement('div');
            header.style.gridColumn = '1 / -1';
            header.style.background = 'var(--primary)';
            header.style.color = 'white';
            header.style.padding = '15px';
            header.style.display = 'flex';
            header.style.justifyContent = 'space-between';
            header.style.alignItems = 'center';
            header.innerHTML = `
                <button onclick="mesAnteriorVisitas()" style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 8px 12px; cursor: pointer; border-radius: 4px;">← </button>
                <strong>${nomesMeses[app.currentMonth]} ${app.currentYear}</strong>
                <button onclick="proximoMesVisitas()" style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 8px 12px; cursor: pointer; border-radius: 4px;"> →</button>
            `;
            calendarGrid.appendChild(header);

            dayNames.forEach(day => {
                const dayHeader = document.createElement('div');
                dayHeader.style.background = 'var(--light-bg)';
                dayHeader.style.padding = '10px';
                dayHeader.style.textAlign = 'center';
                dayHeader.style.fontWeight = '600';
                dayHeader.style.color = 'var(--text-secondary)';
                dayHeader.style.fontSize = '12px';
                dayHeader.textContent = day;
                calendarGrid.appendChild(dayHeader);
            });

            const firstDay = new Date(app.currentYear, app.currentMonth - 1, 1).getDay();
            const daysInMonth = new Date(app.currentYear, app.currentMonth, 0).getDate();
            const daysInPrevMonth = new Date(app.currentYear, app.currentMonth - 1, 0).getDate();

            for (let i = firstDay - 1; i >= 0; i--) {
                const day = document.createElement('div');
                day.style.background = 'var(--light-bg)';
                day.style.color = 'var(--text-secondary)';
                day.style.padding = '10px';
                day.style.textAlign = 'center';
                day.style.fontSize = '12px';
                day.style.cursor = 'default';
                day.textContent = daysInPrevMonth - i;
                calendarGrid.appendChild(day);
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const dayDiv = document.createElement('div');
                dayDiv.style.background = 'white';
                dayDiv.style.padding = '10px';
                dayDiv.style.textAlign = 'center';
                dayDiv.style.cursor = 'pointer';
                dayDiv.style.borderRadius = '4px';
                dayDiv.style.transition = 'all 0.2s';
                dayDiv.style.position = 'relative';
                dayDiv.style.minHeight = '40px';
                dayDiv.style.display = 'flex';
                dayDiv.style.flexDirection = 'column';
                dayDiv.style.justifyContent = 'center';
                dayDiv.style.alignItems = 'center';

                // Formatação da data para comparação
                const dateStr = `${app.currentYear}-${String(app.currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                
                // Verificar se há visitas nesta data
                const visitasNoDia = app.visitas.filter(v => v.data === dateStr);
                
                let dayContent = `<div>${day}</div>`;
                if (visitasNoDia.length > 0) {
                    dayDiv.style.background = '#e3f2fd';
                    dayDiv.style.borderLeft = '4px solid var(--primary)';
                    dayContent = `
                        <div style="font-weight: 600;">${day}</div>
                        <div style="font-size: 10px; color: var(--primary); margin-top: 3px;">📅 ${visitasNoDia.length}</div>
                    `;
                }
                
                dayDiv.innerHTML = dayContent;
                dayDiv.onclick = () => abrirModalComDataVisita(dateStr);

                dayDiv.onmouseover = () => {
                    if (visitasNoDia.length === 0) {
                        dayDiv.style.background = 'var(--primary)';
                        dayDiv.style.color = 'white';
                    } else {
                        dayDiv.style.background = '#bbdefb';
                    }
                };
                dayDiv.onmouseout = () => {
                    if (visitasNoDia.length === 0) {
                        dayDiv.style.background = 'white';
                        dayDiv.style.color = 'var(--text-primary)';
                    } else {
                        dayDiv.style.background = '#e3f2fd';
                    }
                };

                calendarGrid.appendChild(dayDiv);
            }

            for (let i = 1; i <= (35 - firstDay - daysInMonth); i++) {
                const day = document.createElement('div');
                day.style.background = 'var(--light-bg)';
                day.style.color = 'var(--text-secondary)';
                day.style.padding = '10px';
                day.style.textAlign = 'center';
                day.style.fontSize = '12px';
                day.style.cursor = 'default';
                day.textContent = i;
                calendarGrid.appendChild(day);
            }
        }

        function proximoMesVisitas() {
            if (app.currentMonth === 12) { app.currentMonth = 1; app.currentYear++; } else { app.currentMonth++; }
            document.getElementById('mesVisitaSelecionado').value = app.currentMonth;
            document.getElementById('anoVisitaSelecionado').value = app.currentYear;
            renderCalendarVisitas();
            atualizarClientesCarteiraComFiltro();
        }

        function mesAnteriorVisitas() {
            if (app.currentMonth === 1) { app.currentMonth = 12; app.currentYear--; } else { app.currentMonth--; }
            document.getElementById('mesVisitaSelecionado').value = app.currentMonth;
            document.getElementById('anoVisitaSelecionado').value = app.currentYear;
            renderCalendarVisitas();
            atualizarClientesCarteiraComFiltro();
        }

        function mudarMesVisitaFiltro() {
            app.currentMonth = parseInt(document.getElementById('mesVisitaSelecionado').value);
            app.currentYear = parseInt(document.getElementById('anoVisitaSelecionado').value);
            renderCalendarVisitas();
            atualizarClientesCarteiraComFiltro();
        }

        function voltarMesAtual() {
            const hoje = new Date();
            app.currentMonth = hoje.getMonth() + 1;
            app.currentYear = 2026; // Manter consistente
            document.getElementById('mesVisitaSelecionado').value = app.currentMonth;
            document.getElementById('anoVisitaSelecionado').value = app.currentYear;
            renderCalendarVisitas();
            atualizarClientesCarteiraComFiltro();
        }

        function atualizarClientesCarteiraComFiltro() {
            const container = document.getElementById('clientesCarteinaContainer');
            const mesLabel = document.getElementById('filtroMesVisitasLabel');
            const nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            
            // Atualizar label do mês
            mesLabel.textContent = `${nomesMeses[app.currentMonth - 1]}/${app.currentYear}`;
            
            // Filtrar visitas do mês/ano selecionado
            const visitasFiltradas = app.visitas.filter(v => {
                const dataVisita = new Date(v.data);
                return dataVisita.getMonth() + 1 === app.currentMonth && dataVisita.getFullYear() === app.currentYear;
            }).sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));

            if (visitasFiltradas.length === 0) {
                container.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Nenhuma visita agendada para este período</p>';
                return;
            }

            container.innerHTML = visitasFiltradas.map((v, idx) => {
                const indexReal = app.visitas.indexOf(v);
                return `
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-titulo">${v.cliente} ${v.erp ? `(${v.erp})` : ''}</div>
                        <span class="status-badge">${getStatusLabelVisita(v.status)}</span>
                    </div>
                    
                    <div class="project-info">
                        <div class="project-info-item">
                            <div class="project-info-label">Data / Hora</div>
                            <div class="project-info-valor">${new Date(v.data).toLocaleDateString('pt-BR')}${v.hora ? ' às ' + v.hora : ''}</div>
                        </div>
                        <div class="project-info-item">
                            <div class="project-info-label">Cidade / Estado</div>
                            <div class="project-info-valor">${v.cidade || '-'}${v.estado ? ', ' + v.estado : ''}</div>
                        </div>
                        <div class="project-info-item">
                            <div class="project-info-label">Tipo</div>
                            <div class="project-info-valor">${v.tipoVisita === 'rotina' ? '🔄 Visita de Rotina' : '🎯 Novo Projeto de Cliente'}</div>
                        </div>
                    </div>

                    ${v.nomeContato || v.cargoContato || v.telefoneContato || v.emailContato ? `
                    <div class="project-info" style="background: #f5f5f5; padding: 12px; border-radius: 6px; margin: 10px 0;">
                        <div style="font-weight: 600; margin-bottom: 8px;">📞 Dados do Contato</div>
                        ${v.nomeContato ? `<div class="project-info-item"><div class="project-info-label">Nome</div><div class="project-info-valor">${v.nomeContato}</div></div>` : ''}
                        ${v.cargoContato ? `<div class="project-info-item"><div class="project-info-label">Cargo</div><div class="project-info-valor">${v.cargoContato}</div></div>` : ''}
                        ${v.telefoneContato ? `<div class="project-info-item"><div class="project-info-label">Telefone</div><div class="project-info-valor">${v.telefoneContato}</div></div>` : ''}
                        ${v.emailContato ? `<div class="project-info-item"><div class="project-info-label">Email</div><div class="project-info-valor">${v.emailContato}</div></div>` : ''}
                    </div>
                    ` : ''}

                    <div class="project-info">
                        <div class="project-info-item" style="grid-column: 1 / -1;">
                            <label>Status da Visita</label>
                            <select onchange="alterarStatusVisita(${indexReal}, this.value)" style="padding: 8px; border: 1px solid var(--border); border-radius: 4px;">
                                <option value="agendada" ${v.status === 'agendada' ? 'selected' : ''}>Agendada</option>
                                <option value="ocorrida" ${v.status === 'ocorrida' ? 'selected' : ''}>Ocorrida</option>
                                <option value="cancelada" ${v.status === 'cancelada' ? 'selected' : ''}>Cancelada</option>
                                <option value="remarcada" ${v.status === 'remarcada' ? 'selected' : ''}>Remarcada</option>
                            </select>
                        </div>
                    </div>

                    <div class="timeline">
                        ${(v.timeline && v.timeline.length > 0) ? v.timeline.map((item, itemIdx) => `
                            <div class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <div class="timeline-date">${item.data} às ${item.hora}</div>
                                    <div class="timeline-title">${item.evento}</div>
                                    <div id="obsDisplay_${indexReal}_${itemIdx}" style="display: block;">
                                        <div class="timeline-desc">${item.descricao}</div>
                                        ${item.editavel ? `
                                            <button class="btn-primary" onclick="abrirEdicaoObservacao(${indexReal}, ${itemIdx})" style="margin-top: 8px; padding: 6px 12px; font-size: 11px;">✏️ Editar</button>
                                        ` : ''}
                                    </div>
                                    <div id="obsEdit_${indexReal}_${itemIdx}" style="display: none; margin-top: 8px;">
                                        <textarea id="textareaObs_${indexReal}_${itemIdx}" style="width: 100%; padding: 8px; border: 1px solid var(--border); border-radius: 4px; min-height: 60px; font-size: 12px;">${item.descricao}</textarea>
                                        <div style="margin-top: 6px; display: flex; gap: 8px;">
                                            <button class="btn-primary" onclick="salvarObservacao(${indexReal}, ${itemIdx})" style="padding: 6px 12px; font-size: 11px;">✓ Salvar</button>
                                            <button class="btn-danger" onclick="fecharEdicaoObservacao(${indexReal}, ${itemIdx})" style="padding: 6px 12px; font-size: 11px; background-color: #ccc; color: #333;">Cancelar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('') : '<p style="color: var(--text-secondary); font-size: 12px;">Sem eventos na timeline</p>'}
                    </div>

                    <div style="background: #f9f9f9; padding: 12px; border-radius: 6px; margin-top: 15px;">
                        <label style="font-weight: 600; display: block; margin-bottom: 8px;">➕ Adicionar Observação</label>
                        <textarea id="novaObs_${indexReal}" placeholder="Ex: Visita realizada, próximo passo: enviar proposta..." style="width: 100%; padding: 8px; border: 1px solid var(--border); border-radius: 4px; min-height: 70px; font-size: 12px; box-sizing: border-box;"></textarea>
                        <button class="btn-primary" onclick="adicionarObservacao(${indexReal})" style="margin-top: 8px; padding: 8px 16px;">📝 Registrar Observação</button>
                    </div>

                    <div class="project-actions">
                        <button class="btn-danger" onclick="deletarVisita(${indexReal})">🗑️ Deletar</button>
                    </div>
                </div>
                `;
            }).join('');
            
            // Renderizar kanban junto
            renderKanbanVisitas();
        }

        function renderKanbanVisitas() {
            const statusOptions = ['agendada', 'ocorrida', 'remarcada', 'cancelada'];
            const statusLabels = {
                'agendada': '📅 Agendada',
                'ocorrida': '✓ Ocorrida',
                'remarcada': '📅 Remarcada',
                'cancelada': '✗ Cancelada'
            };
            const statusColors = {
                'agendada': '#e3f2fd',
                'ocorrida': '#e8f5e9',
                'remarcada': '#fff3e0',
                'cancelada': '#ffebee'
            };
            
            const board = document.getElementById('kanbanVisitas');
            const nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            document.getElementById('filtroMesVisitasLabelKanban').textContent = `${nomesMeses[app.currentMonth - 1]}/${app.currentYear}`;

            board.innerHTML = statusOptions.map(status => {
                const visitasStatus = app.visitas.filter(v => {
                    const dataVisita = new Date(v.data);
                    return v.status === status && 
                           dataVisita.getMonth() + 1 === app.currentMonth && 
                           dataVisita.getFullYear() === app.currentYear;
                });

                return `
                    <div class="kanban-column" style="background: ${statusColors[status]}; border-left: 4px solid ${statusColors[status] === '#e3f2fd' ? '#1976d2' : statusColors[status] === '#e8f5e9' ? '#388e3c' : statusColors[status] === '#fff3e0' ? '#f57c00' : '#d32f2f'};">
                        <div class="kanban-column-header" style="background: ${statusColors[status] === '#e3f2fd' ? '#1976d2' : statusColors[status] === '#e8f5e9' ? '#388e3c' : statusColors[status] === '#fff3e0' ? '#f57c00' : '#d32f2f'}; color: white;">
                            ${statusLabels[status]} (${visitasStatus.length})
                        </div>
                        <div style="min-height: 400px; padding: 10px;">
                            ${visitasStatus.length === 0 ? '<p style="color: var(--text-secondary); text-align: center; font-size: 12px;">Sem visitas</p>' : ''}
                            ${visitasStatus.map(v => {
                                const indexReal = app.visitas.indexOf(v);
                                return `
                                    <div class="kanban-card" style="background: white; margin-bottom: 12px;">
                                        <div style="font-weight: 600; font-size: 13px; margin-bottom: 6px;">${v.cliente}</div>
                                        <div style="font-size: 11px; color: var(--text-secondary); margin-bottom: 4px;">
                                            ${new Date(v.data).toLocaleDateString('pt-BR')}${v.hora ? ' ' + v.hora : ''}
                                        </div>
                                        <div style="font-size: 11px; color: var(--text-secondary); margin-bottom: 8px;">
                                            ${v.nomeContato || '-'}
                                        </div>
                                        <select onchange="alterarStatusVisitaKanban(${indexReal}, this.value)" style="width: 100%; padding: 6px; border: 1px solid var(--border); border-radius: 4px; font-size: 11px;">
                                            <option value="agendada" ${v.status === 'agendada' ? 'selected' : ''}>Agendada</option>
                                            <option value="ocorrida" ${v.status === 'ocorrida' ? 'selected' : ''}>Ocorrida</option>
                                            <option value="cancelada" ${v.status === 'cancelada' ? 'selected' : ''}>Cancelada</option>
                                            <option value="remarcada" ${v.status === 'remarcada' ? 'selected' : ''}>Remarcada</option>
                                        </select>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            }).join('');
        }

        function alterarStatusVisitaKanban(visitaIdx, novoStatus) {
            app.visitas[visitaIdx].status = novoStatus;
            app.visitas[visitaIdx].timeline.push({
                data: new Date().toLocaleDateString('pt-BR'),
                hora: new Date().toLocaleTimeString('pt-BR'),
                evento: getStatusLabelVisita(novoStatus),
                descricao: `Visita marcada como ${novoStatus}`,
                editavel: false
            });
            salvar();
            atualizarClientesCarteira();
        }

        function abrirModalComDataVisita(dateStr) {
            document.getElementById('modalAgendamento').classList.add('active');
            document.getElementById('dataAgendamento').value = dateStr;
            document.getElementById('tipocliente').value = 'carteira';
            atualizarOpcoesCliente();
        }

        function renderKanban() {
            const etapas = ['novo', 'negociando', 'avaliando', 'assinatura', 'ganho'];
            const etapasLabels = ['Novo', 'Negociando com Integrador', 'Avaliando Proposta', 'Assinatura de Contrato', 'Ganho'];
            const board = document.getElementById('kanbanBoard');

            board.innerHTML = etapas.map((etapa, idx) => {
                const projetosEtapa = app.oportunidades.filter(o => o.etapa === etapa);
                return `
                    <div class="kanban-column" ondrop="dropCard(event)" ondragover="allowDrop(event)" data-etapa="${etapa}">
                        <div class="kanban-column-header">${etapasLabels[idx]} (${projetosEtapa.length})</div>
                        <div id="kanban-${etapa}">
                            ${projetosEtapa.length === 0 ? '<p style="color: var(--text-secondary); text-align: center; font-size: 12px;">Sem oportunidades</p>' : ''}
                            ${projetosEtapa.map((o, oIdx) => {
                                const oIndexReal = app.oportunidades.indexOf(o);
                                return `
                                    <div class="kanban-card" draggable="true" ondragstart="dragCard(event, ${oIndexReal})" ondragend="dragEnd(event)" data-index="${oIndexReal}" onclick="if(event.target.closest('.kanban-card-actions')) return; abrirDetalhesOportunidade(${oIndexReal});" style="cursor: pointer;">
                                        <div class="kanban-card-title">${o.nome}</div>
                                        ${o.cliente ? `<div class="kanban-card-info" style="font-weight: 600; color: var(--primary);">🏢 ${o.cliente}</div>` : ''}
                                        <div class="kanban-card-info">👤 ${o.contato}${o.cargo ? ` (${o.cargo})` : ''}</div>
                                        <div class="kanban-card-info">📧 ${o.email || '-'}</div>
                                        <div class="kanban-card-info">📞 ${o.telefone || '-'}</div>
                                        <div class="kanban-card-info">📍 ${o.cidade || '-'}${o.estado ? `, ${o.estado}` : ''}</div>
                                        <div class="kanban-card-info">💰 R$ ${(o.valor || 0).toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
                                        <div class="kanban-card-temp ${o.temperatura}">
                                            ${o.temperatura === 'frio' ? '❄️ Frio' : o.temperatura === 'morno' ? '🔥 Morno' : '🌡️ Quente'}
                                        </div>
                                        <div class="kanban-card-actions">
                                            ${o.telefone ? `<button class="kanban-card-whatsapp" onclick="abrirWhatsApp('${o.telefone}', '${o.nome}')">💬 WhatsApp</button>` : ''}
                                            <button class="kanban-card-edit" onclick="editarOportunidade(${oIndexReal})">✏️</button>
                                            <button class="kanban-card-delete" onclick="deletarOportunidade(${oIndexReal})">🗑️</button>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            }).join('');

            // Inicializar drag and drop
            inicializarDragDrop();
        }

        let cardEmArrastar = null;

        function allowDrop(ev) {
            ev.preventDefault();
            ev.target.closest('.kanban-column').style.backgroundColor = 'rgba(24, 95, 165, 0.05)';
        }

        function dragCard(ev, index) {
            cardEmArrastar = index;
            ev.dataTransfer.effectAllowed = 'move';
            ev.target.closest('.kanban-card').style.opacity = '0.5';
        }

        function dragEnd(ev) {
            document.querySelectorAll('.kanban-column').forEach(col => {
                col.style.backgroundColor = '';
            });
            ev.target.closest('.kanban-card').style.opacity = '1';
        }

        function dropCard(ev) {
            ev.preventDefault();
            const coluna = ev.target.closest('.kanban-column');
            const novaEtapa = coluna.getAttribute('data-etapa');
            
            if (cardEmArrastar !== null) {
                app.oportunidades[cardEmArrastar].etapa = novaEtapa;
                salvar(); // Salvar a mudança de etapa PRIMEIRO
                renderKanban(); // Renderizar o kanban SEMPRE
                
                // Se mover para "ganho", abre modal para cadastrar como cliente (opcional)
                if (novaEtapa === 'ganho') {
                    abrirModalCadastroClienteOportunidade(cardEmArrastar);
                }
                
                cardEmArrastar = null;
            }
        }

        function inicializarDragDrop() {
            document.querySelectorAll('.kanban-card').forEach(card => {
                card.addEventListener('dragstart', function(e) {
                    dragCard(e, parseInt(this.getAttribute('data-index')));
                });
                card.addEventListener('dragend', dragEnd);
            });

            document.querySelectorAll('.kanban-column').forEach(col => {
                col.addEventListener('dragover', allowDrop);
                col.addEventListener('drop', dropCard);
            });
        }

        function openModalCadastroOportunidade() {
            document.getElementById('modalCadastroOportunidade').classList.add('active');
            // Limpar campos
            document.getElementById('nomeOportunidade').value = '';
            document.getElementById('clienteOportunidade').value = '';
            document.getElementById('nomeContatoOportunidade').value = '';
            document.getElementById('cargoContatoOportunidade').value = '';
            document.getElementById('emailOportunidade').value = '';
            document.getElementById('telefoneOportunidade').value = '';
            document.getElementById('cidadeOportunidade').value = '';
            document.getElementById('estadoOportunidade').value = '';
            document.getElementById('valorOportunidade').value = '';
            document.getElementById('temperaturaOportunidade').value = 'frio';
            
            // Preencher datalist de clientes
            const datalist = document.getElementById('clientesList');
            datalist.innerHTML = Object.keys(app.clientes).map(cliente => 
                `<option value="${cliente}">`
            ).join('');
        }

        function closeModalCadastroOportunidade() {
            document.getElementById('modalCadastroOportunidade').classList.remove('active');
        }

        async function salvarOportunidade() {
            const nome = document.getElementById('nomeOportunidade').value;
            const cliente = document.getElementById('clienteOportunidade').value;
            const contato = document.getElementById('nomeContatoOportunidade').value;
            const cargo = document.getElementById('cargoContatoOportunidade').value;
            const email = document.getElementById('emailOportunidade').value;
            const telefone = document.getElementById('telefoneOportunidade').value;
            const cidade = document.getElementById('cidadeOportunidade').value;
            const estado = document.getElementById('estadoOportunidade').value;
            const valor = parseFloat(document.getElementById('valorOportunidade').value) || 0;
            const temperatura = document.getElementById('temperaturaOportunidade').value;

            if (!nome) {
                alert('Digite o nome do projeto');
                return;
            }

            const oportunidade = {
                nome, cliente, contato, cargo, email, telefone, cidade, estado, valor, temperatura,
                etapa: 'novo',
                dataCriacao: new Date().toISOString(),
                integrador: {
                    nome: '', comissao: 0, erpCliente: '', consumoMensal: 0,
                    modelosEtiqueta: [], subsidioHaco: false, equipamentos: 0,
                    impressoraComodato: false, modeloImpressora: '', precoImpressora: 0,
                    mensalidadeSistema: 0, tevePOC: false
                },
                timeline: [{
                    data: new Date().toLocaleDateString('pt-BR'),
                    hora: new Date().toLocaleTimeString('pt-BR'),
                    tipo: 'criacao',
                    descricao: 'Oportunidade criada',
                    documento: null
                }]
            };

            app.oportunidades.push(oportunidade);
            renderKanban();

            try {
                await salvar();
                closeModalCadastroOportunidade();
                alert('Oportunidade cadastrada com sucesso!');
            } catch (err) {
                app.oportunidades.pop();
                localStorage.setItem('oportunidades', JSON.stringify(app.oportunidades));
                renderKanban();
                alert('❌ Erro ao salvar oportunidade no banco. Operação revertida.');
            }
        }

        async function deletarOportunidade(idx) {
            if (!confirm('Deletar esta oportunidade?')) return;

            const [removida] = app.oportunidades.splice(idx, 1);
            localStorage.setItem('oportunidades', JSON.stringify(app.oportunidades));
            renderKanban();

            try {
                await salvar();
            } catch (err) {
                app.oportunidades.splice(idx, 0, removida);
                localStorage.setItem('oportunidades', JSON.stringify(app.oportunidades));
                renderKanban();
                alert('❌ Erro ao deletar oportunidade no banco. Operação revertida.');
            }
        }

        function editarOportunidade(idx) {
            const o = app.oportunidades[idx];
            document.getElementById('modalCadastroOportunidade').classList.add('active');
            document.getElementById('nomeOportunidade').value = o.nome;
            document.getElementById('clienteOportunidade').value = o.cliente || '';
            document.getElementById('nomeContatoOportunidade').value = o.contato;
            document.getElementById('cargoContatoOportunidade').value = o.cargo || '';
            document.getElementById('emailOportunidade').value = o.email;
            document.getElementById('telefoneOportunidade').value = o.telefone;
            document.getElementById('cidadeOportunidade').value = o.cidade;
            document.getElementById('estadoOportunidade').value = o.estado;
            document.getElementById('valorOportunidade').value = o.valor;
            document.getElementById('temperaturaOportunidade').value = o.temperatura;

            // Alterar botão para atualizar
            const btnSalvar = document.querySelector('#modalCadastroOportunidade button.btn-primary');
            btnSalvar.textContent = '✓ Atualizar Oportunidade';
            btnSalvar.onclick = () => {
                o.nome = document.getElementById('nomeOportunidade').value;
                o.cliente = document.getElementById('clienteOportunidade').value;
                o.contato = document.getElementById('nomeContatoOportunidade').value;
                o.cargo = document.getElementById('cargoContatoOportunidade').value;
                o.email = document.getElementById('emailOportunidade').value;
                o.telefone = document.getElementById('telefoneOportunidade').value;
                o.cidade = document.getElementById('cidadeOportunidade').value;
                o.estado = document.getElementById('estadoOportunidade').value;
                o.valor = parseFloat(document.getElementById('valorOportunidade').value) || 0;
                o.temperatura = document.getElementById('temperaturaOportunidade').value;
                salvar();
                renderKanban();
                closeModalCadastroOportunidade();
                btnSalvar.textContent = '✓ Cadastrar Oportunidade';
                btnSalvar.onclick = salvarOportunidade;
                alert('Oportunidade atualizada com sucesso!');
            };
        }

        function moverOportunidade(idx, novaEtapa) {
            app.oportunidades[idx].etapa = novaEtapa;
            salvar();
            renderKanban();
        }

        // VARIÁVEL GLOBAL PARA RASTREAR QUAL OPORTUNIDADE ESTÁ SENDO VISUALIZADA
        let oportunidadeEmVisualizacao = null;

        function abrirDetalhesOportunidade(idx) {
            oportunidadeEmVisualizacao = idx;
            const o = app.oportunidades[idx];
            
            // Preencher informações básicas
            document.getElementById('detNomeOportunidade').value = o.nome;
            document.getElementById('detClienteOportunidade').value = o.cliente || '(não informado)';
            document.getElementById('detContatoOportunidade').value = o.contato;
            document.getElementById('detCargoOportunidade').value = o.cargo || '(não informado)';
            document.getElementById('detEmailOportunidade').value = o.email;
            document.getElementById('detTelefoneOportunidade').value = o.telefone;
            document.getElementById('detCidadeEstadoOportunidade').value = `${o.cidade || ''}${o.estado ? ', ' + o.estado : ''}`;
            document.getElementById('detValorOportunidade').value = `R$ ${o.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
            
            const etapaLabel = {
                'novo': 'Novo',
                'negociando': 'Negociando com Integrador',
                'avaliando': 'Avaliando Proposta',
                'assinatura': 'Assinatura de Contrato',
                'ganho': 'Ganho'
            };
            document.getElementById('detEtapaOportunidade').value = etapaLabel[o.etapa] || o.etapa;
            
            const tempLabel = {
                'frio': '❄️ Frio',
                'morno': '🔥 Morno',
                'quente': '🌡️ Quente'
            };
            document.getElementById('detTemperaturaOportunidade').value = tempLabel[o.temperatura] || o.temperatura;
            
            // Preencher Integrador
            document.getElementById('detIntegrador').value = o.integrador?.nome || '(não informado)';
            document.getElementById('detComissaoIntegrador').value = o.integrador?.comissao ? `R$ ${(o.integrador.comissao).toLocaleString('pt-BR', {minimumFractionDigits: 2})}` : '(não informado)';
            document.getElementById('detErpCliente').value = o.integrador?.erpCliente || '(não informado)';
            document.getElementById('detConsumoMensal').value = o.integrador?.consumoMensal || '(não informado)';
            
            // Modelos de Etiqueta
            const detModelos = document.getElementById('detModelosEtiqueta');
            if (o.integrador?.modelosEtiqueta?.length > 0) {
                detModelos.innerHTML = o.integrador.modelosEtiqueta
                    .map(m => `<span style="background: var(--primary); color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${m}</span>`)
                    .join('');
            } else {
                detModelos.innerHTML = '<span style="color: #999;">(nenhum)</span>';
            }
            
            document.getElementById('detSubsidioHaco').value = o.integrador?.subsidioHaco ? 'Sim' : 'Não';
            
            // Mostrar/ocultar campos de subsídio
            if (o.integrador?.subsidioHaco) {
                document.getElementById('camposSubsidioDetalhes').style.display = 'block';
                document.getElementById('detEquipamentos').value = o.integrador.equipamentos ? `R$ ${o.integrador.equipamentos.toLocaleString('pt-BR', {minimumFractionDigits: 2})}` : '(não informado)';
                document.getElementById('detImpressoraComodato').value = o.integrador.impressoraComodato ? 'Sim' : 'Não';
                
                if (o.integrador.impressoraComodato) {
                    document.getElementById('camposImpressoraDetalhes').style.display = 'block';
                    document.getElementById('detModeloImpressora').value = o.integrador.modeloImpressora || '(não informado)';
                    document.getElementById('detPrecoImpressora').value = o.integrador.precoImpressora ? `R$ ${o.integrador.precoImpressora.toLocaleString('pt-BR', {minimumFractionDigits: 2})}` : '(não informado)';
                } else {
                    document.getElementById('camposImpressoraDetalhes').style.display = 'none';
                }
                
                document.getElementById('detMensalidadeSistema').value = o.integrador.mensalidadeSistema ? `R$ ${o.integrador.mensalidadeSistema.toLocaleString('pt-BR', {minimumFractionDigits: 2})}` : '(não informado)';
                document.getElementById('detTevePOC').value = o.integrador.tevePOC ? 'Sim' : 'Não';
            } else {
                document.getElementById('camposSubsidioDetalhes').style.display = 'none';
            }
            
            document.getElementById('modalDetalhesOportunidadeTitulo').textContent = `📋 ${o.nome}`;
            
            // Renderizar timeline
            renderizarTimelineOportunidade(idx);
            
            document.getElementById('modalDetalhesOportunidade').classList.add('active');
            
            // Adicionar listener para fechar com ESC
            document.addEventListener('keydown', function handleEscapeDetalhes(e) {
                if (e.key === 'Escape' && document.getElementById('modalDetalhesOportunidade').classList.contains('active')) {
                    closeModalDetalhesOportunidade();
                    // Remover listener para não ficar ativo para sempre
                    document.removeEventListener('keydown', handleEscapeDetalhes);
                }
            });
        }

        function closeModalDetalhesOportunidade() {
            document.getElementById('modalDetalhesOportunidade').classList.remove('active');
            document.getElementById('novaAnotacaoOportunidade').value = '';
            document.getElementById('inputDocumentoOportunidade').value = '';
            oportunidadeEmVisualizacao = null;
        }

        function renderizarTimelineOportunidade(idx) {
            const o = app.oportunidades[idx];
            const timeline = o.timeline || [];
            const container = document.getElementById('timelineOportunidade');
            
            if (timeline.length === 0) {
                container.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Nenhuma anotação ou documento ainda</p>';
                return;
            }
            
            container.innerHTML = timeline.map((item, itemIdx) => `
                <div style="padding: 12px; margin-bottom: 10px; background: #f9f9f9; border-left: 4px solid var(--primary); border-radius: 4px;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                        <strong style="color: var(--text-primary);">
                            ${item.tipo === 'criacao' ? '✨ Criação' : item.tipo === 'anotacao' ? '📝 Anotação' : '📎 Documento'}
                        </strong>
                        <small style="color: var(--text-secondary);">${item.data} ${item.hora}</small>
                    </div>
                    ${item.descricao ? `<p style="margin: 8px 0; color: var(--text-primary);">${item.descricao}</p>` : ''}
                    ${item.documento ? `
                        <div style="background: white; padding: 8px; border-radius: 4px; border: 1px solid #ddd; margin-top: 8px;">
                            <a href="${item.documento.url}" target="_blank" style="color: var(--primary); text-decoration: none;">
                                📥 ${item.documento.nome} (${item.documento.tamanho})
                            </a>
                        </div>
                    ` : ''}
                    <div style="display: flex; gap: 8px; margin-top: 8px;">
                        ${item.tipo === 'anotacao' ? `
                            <button class="btn-success" onclick="abrirEditarAnotacao(${itemIdx})" style="font-size: 12px; padding: 4px 8px; background-color: #4CAF50;">✏️ Editar</button>
                        ` : ''}
                        <button class="btn-danger" onclick="removerItemTimeline(${itemIdx})" style="margin-top: 0; font-size: 12px; padding: 4px 8px;">Remover</button>
                    </div>
                </div>
            `).join('');
        }

        function adicionarAnotacaoOportunidade() {
            if (oportunidadeEmVisualizacao === null) return;
            
            const texto = document.getElementById('novaAnotacaoOportunidade').value.trim();
            if (!texto) {
                alert('Digite uma anotação');
                return;
            }
            
            const o = app.oportunidades[oportunidadeEmVisualizacao];
            if (!o.timeline) o.timeline = [];
            
            o.timeline.push({
                data: new Date().toLocaleDateString('pt-BR'),
                hora: new Date().toLocaleTimeString('pt-BR'),
                tipo: 'anotacao',
                descricao: texto,
                documento: null
            });
            
            salvar();
            document.getElementById('novaAnotacaoOportunidade').value = '';
            renderizarTimelineOportunidade(oportunidadeEmVisualizacao);
        }

        function adicionarDocumentoOportunidade() {
            if (oportunidadeEmVisualizacao === null) return;
            
            const inputFile = document.getElementById('inputDocumentoOportunidade');
            const arquivo = inputFile.files[0];
            
            if (!arquivo) {
                alert('Selecione um arquivo');
                return;
            }
            
            // Limitar tamanho para 5MB
            const maxTamanho = 5 * 1024 * 1024;
            if (arquivo.size > maxTamanho) {
                alert('Arquivo muito grande. Máximo 5MB');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (e) => {
                const o = app.oportunidades[oportunidadeEmVisualizacao];
                if (!o.timeline) o.timeline = [];
                
                const tamanhoKB = (arquivo.size / 1024).toFixed(2);
                
                o.timeline.push({
                    data: new Date().toLocaleDateString('pt-BR'),
                    hora: new Date().toLocaleTimeString('pt-BR'),
                    tipo: 'documento',
                    descricao: `Documento enviado: ${arquivo.name}`,
                    documento: {
                        nome: arquivo.name,
                        tamanho: `${tamanhoKB}KB`,
                        tipo: arquivo.type,
                        url: e.target.result
                    }
                });
                
                salvar();
                inputFile.value = '';
                renderizarTimelineOportunidade(oportunidadeEmVisualizacao);
                alert(`✓ Documento "${arquivo.name}" adicionado!`);
            };
            
            reader.readAsDataURL(arquivo);
        }

        function removerItemTimeline(itemIdx) {
            if (oportunidadeEmVisualizacao === null) return;
            
            if (confirm('Remover este item da timeline?')) {
                const o = app.oportunidades[oportunidadeEmVisualizacao];
                if (o.timeline) {
                    o.timeline.splice(itemIdx, 1);
                    salvar();
                    renderizarTimelineOportunidade(oportunidadeEmVisualizacao);
                }
            }
        }

        let anotacaoEmEdicao = null;

        function abrirEditarAnotacao(itemIdx) {
            if (oportunidadeEmVisualizacao === null) return;
            
            const o = app.oportunidades[oportunidadeEmVisualizacao];
            const item = o.timeline[itemIdx];
            
            if (item.tipo !== 'anotacao') {
                alert('Apenas anotações podem ser editadas');
                return;
            }
            
            anotacaoEmEdicao = itemIdx;
            document.getElementById('editarAnotacaoTexto').value = item.descricao;
            document.getElementById('modalEditarAnotacao').classList.add('active');
        }

        function closeModalEditarAnotacao() {
            document.getElementById('modalEditarAnotacao').classList.remove('active');
            document.getElementById('editarAnotacaoTexto').value = '';
            anotacaoEmEdicao = null;
        }

        function salvarEdicaoAnotacao() {
            if (oportunidadeEmVisualizacao === null || anotacaoEmEdicao === null) return;
            
            const novoTexto = document.getElementById('editarAnotacaoTexto').value.trim();
            if (!novoTexto) {
                alert('Digite o texto da anotação');
                return;
            }
            
            const o = app.oportunidades[oportunidadeEmVisualizacao];
            o.timeline[anotacaoEmEdicao].descricao = novoTexto;
            o.timeline[anotacaoEmEdicao].data = new Date().toLocaleDateString('pt-BR');
            o.timeline[anotacaoEmEdicao].hora = new Date().toLocaleTimeString('pt-BR');
            
            salvar();
            renderizarTimelineOportunidade(oportunidadeEmVisualizacao);
            closeModalEditarAnotacao();
            alert('✓ Anotação atualizada!');
        }

        // Funções para Visitas & Reuniões
        let visitasReunioes = app.visitasReunioes || [];

        function openModalAgendamentoVisita() {
            document.getElementById('modalNovaVisitaReuniao').classList.add('active');
            // Definir data de hoje como padrão
            const hoje = new Date().toISOString().split('T')[0];
            document.getElementById('novaVisitaData').value = hoje;
            document.getElementById('novaVisitaHora').value = '10:00';
        }

        function closeModalNovaVisitaReuniao() {
            document.getElementById('modalNovaVisitaReuniao').classList.remove('active');
            limparFormularioVisita();
        }

        function limparFormularioVisita() {
            document.getElementById('novaVisitaCliente').value = '';
            document.getElementById('novaVisitaNomeContato').value = '';
            document.getElementById('novaVisitaCargo').value = '';
            document.getElementById('novaVisitaEmail').value = '';
            document.getElementById('novaVisitaTelefone').value = '';
            document.getElementById('novaVisitaCidade').value = '';
            document.getElementById('novaVisitaEstado').value = '';
            document.getElementById('novaVisitaData').value = '';
            document.getElementById('novaVisitaHora').value = '';
            document.getElementById('novaVisitaTipo').value = 'presencial';
            document.getElementById('novaVisitaObservacoes').value = '';
        }

        async function salvarNovaVisitaReuniao() {
            const cliente = document.getElementById('novaVisitaCliente').value.trim();
            const nomeContato = document.getElementById('novaVisitaNomeContato').value.trim();
            const cargo = document.getElementById('novaVisitaCargo').value.trim();
            const email = document.getElementById('novaVisitaEmail').value.trim();
            const telefone = document.getElementById('novaVisitaTelefone').value.trim();
            const cidade = document.getElementById('novaVisitaCidade').value.trim();
            const estado = document.getElementById('novaVisitaEstado').value.trim();
            const data = document.getElementById('novaVisitaData').value;
            const hora = document.getElementById('novaVisitaHora').value;
            const tipo = document.getElementById('novaVisitaTipo').value;
            const observacoes = document.getElementById('novaVisitaObservacoes').value.trim();

            if (!cliente || !data || !hora || !estado || !cidade) {
                alert('Preencha: Cliente, Estado, Cidade, Data e Hora');
                return;
            }

            // Converter data para formato brasileiro
            const [ano, mes, dia] = data.split('-');
            const dataFormatada = `${dia}/${mes}/${ano}`;

            const novaVisita = {
                id: Date.now(),
                cliente, nomeContato, cargo, email, telefone,
                cidade, estado,
                data: dataFormatada, dataISO: data,
                hora, tipo, status: 'agendada', observacoes,
                dataCriacao: new Date().toISOString(),
                timeline: [{
                    data: new Date().toLocaleDateString('pt-BR'),
                    hora: new Date().toLocaleTimeString('pt-BR'),
                    evento: 'criacao',
                    descricao: `Visita/Reunião criada - Tipo: ${tipo}`,
                    editavel: false
                }]
            };

            if (!app.visitasReunioes) {
                app.visitasReunioes = [];
            }

            app.visitasReunioes.push(novaVisita);
            renderizarKanbanVisitasReunioes();

            try {
                await salvar();
                closeModalNovaVisitaReuniao();
                alert('✓ Visita/Reunião agendada com sucesso!');
            } catch (err) {
                app.visitasReunioes.pop();
                localStorage.setItem('visitasReunioes', JSON.stringify(app.visitasReunioes));
                renderizarKanbanVisitasReunioes();
                alert('❌ Erro ao salvar visita/reunião no banco. Operação revertida.');
            }
        }

        function renderizarKanbanVisitasReunioes() {
            const container = document.getElementById('kanbanVisitasReunioes');
            const mes = parseInt(document.getElementById('mesVisitaSelecionado').value);
            const ano = parseInt(document.getElementById('anoVisitaSelecionado').value);
            const tipoFiltro = document.getElementById('filtroTipoVisita').value;
            const visitasReunioes = app.visitasReunioes || [];
            
            // Filtrar por período
            let visitasFiltradas = visitasReunioes
                .map((v, realIdx) => ({...v, realIdx}));
            
            // Aplicar filtro de semana se ativo
            if (window.filtroSemana) {
                visitasFiltradas = visitasFiltradas.filter(v => {
                    const [dia, mesVisita, anoVisita] = v.data.split('/').map(Number);
                    const dataVisita = new Date(anoVisita, mesVisita - 1, dia);
                    return dataVisita >= window.dataInicio && dataVisita <= window.dataFim;
                });
            }
            // Aplicar filtro de ano se ativo
            else if (window.filtroAno) {
                visitasFiltradas = visitasFiltradas.filter(v => {
                    const [dia, mesVisita, anoVisita] = v.data.split('/').map(Number);
                    return anoVisita === ano;
                });
            }
            // Caso contrário, filtrar por mês/ano normalmente
            else {
                visitasFiltradas = visitasFiltradas.filter(v => {
                    const [dia, mesVisita, anoVisita] = v.data.split('/').map(Number);
                    return mesVisita === mes && anoVisita === ano;
                });
            }
            
            // Aplicar filtro de tipo (presencial/online/híbrida)
            if (tipoFiltro) {
                visitasFiltradas = visitasFiltradas.filter(v => v.tipo === tipoFiltro);
            }

            if (!visitasFiltradas || visitasFiltradas.length === 0) {
                container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; grid-column: 1/-1;">Nenhuma visita/reunião agendada para este período</p>';
                return;
            }

            // Agrupar por status (apenas as filtradas)
            const porStatus = {
                agendada: [],
                remarcada: [],
                realizada: [],
                cancelada: []
            };

            visitasFiltradas.forEach((v) => {
                if (porStatus[v.status]) {
                    porStatus[v.status].push(v);
                }
            });

            // Renderizar colunas
            const colunas = [
                { status: 'agendada', titulo: '📅 Agendada', cor: '#2196F3' },
                { status: 'remarcada', titulo: '🔄 Remarcada', cor: '#FF9800' },
                { status: 'realizada', titulo: '✔️ Realizada', cor: '#9C27B0' },
                { status: 'cancelada', titulo: '❌ Cancelada', cor: '#F44336' }
            ];

            container.innerHTML = colunas.map(coluna => `
                <div class="kanban-coluna" data-status="${coluna.status}" style="
                    background: var(--bg-section);
                    border-radius: 8px;
                    padding: 15px;
                    display: flex;
                    flex-direction: column;
                    min-height: 0;
                    border: 1px solid var(--border);
                ">
                    <h3 style="
                        margin: 0 0 15px 0;
                        font-size: 14px;
                        font-weight: 600;
                        color: ${coluna.cor};
                        flex-shrink: 0;
                    ">
                        ${coluna.titulo} (${porStatus[coluna.status].length})
                    </h3>
                    
                    <div class="kanban-cards-container" data-status="${coluna.status}" style="
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        overflow-y: auto;
                        overflow-x: hidden;
                        padding-right: 8px;
                    ">
                        ${porStatus[coluna.status].length === 0 ? `
                            <p style="
                                color: var(--text-secondary);
                                text-align: center;
                                font-size: 12px;
                                margin: auto;
                            ">Sem visitas</p>
                        ` : porStatus[coluna.status].map((visita) => `
                            <div class="kanban-card-visita" 
                                 draggable="true"
                                 data-visita-id="${visita.realIdx}"
                                 data-status="${coluna.status}"
                                 ondragstart="dragStartVisita(event)"
                                 ondragover="dragOverVisita(event)"
                                 ondrop="dropVisita(event)"
                                 ondragend="dragEndVisita(event)"
                                 onclick="abrirDetalhesVisitaReuniaoModal('${visita.realIdx}')"
                                 style="
                                background: var(--card-bg);
                                border-left: 4px solid ${coluna.cor};
                                padding: 12px;
                                border-radius: 4px;
                                cursor: move;
                                transition: all 0.2s;
                                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                                user-select: none;
                                overflow: hidden;
                                flex-shrink: 0;
                            ">
                                <div style="
                                    font-weight: 600;
                                    margin-bottom: 6px;
                                    font-size: 13px;
                                    color: var(--text-primary);
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                ">${visita.cliente}</div>
                                
                                <div style="
                                    font-size: 11px;
                                    color: var(--text-secondary);
                                    margin-bottom: 3px;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                ">👤 ${visita.nomeContato || 'Sem contato'}</div>
                                
                                <div style="
                                    font-size: 11px;
                                    color: var(--text-secondary);
                                    margin-bottom: 3px;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                ">
                                    ${visita.tipo === 'presencial' ? '🏢' : visita.tipo === 'online' ? '💻' : '🔄'} 
                                    ${visita.tipo.charAt(0).toUpperCase() + visita.tipo.slice(1)}
                                </div>
                                
                                <div style="
                                    font-size: 11px;
                                    color: var(--text-secondary);
                                    margin-bottom: 3px;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                ">📅 ${visita.data} ${visita.hora}</div>
                                
                                <div style="
                                    font-size: 10px;
                                    color: var(--text-secondary);
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                ">📍 ${visita.cidade || 'Online'}, ${visita.estado || ''}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');

            // Re-adicionar listeners após renderizar
            document.querySelectorAll('.kanban-coluna').forEach(coluna => {
                coluna.ondragover = (e) => dragOverColuna(e);
                coluna.ondrop = (e) => dropColuna(e);
            });
        }

        let draggedCard = null;

        function dragStartVisita(e) {
            draggedCard = e.target;
            e.target.style.opacity = '0.5';
            e.dataTransfer.effectAllowed = 'move';
        }

        function dragOverVisita(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }

        function dragOverColuna(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }

        function dropColuna(e) {
            e.preventDefault();
            if (draggedCard) {
                draggedCard.style.opacity = '1';
                const novoStatus = e.currentTarget.getAttribute('data-status');
                const visitaIdx = draggedCard.getAttribute('data-visita-id');
                
                if (visitaIdx !== null && novoStatus) {
                    const visita = app.visitasReunioes[visitaIdx];
                    if (visita) {
                        visita.status = novoStatus;
                        salvar();
                        renderizarKanbanVisitasReunioes();
                    }
                }
            }
            draggedCard = null;
        }

        function dropVisita(e) {
            e.preventDefault();
            if (draggedCard) {
                draggedCard.style.opacity = '1';
            }
            draggedCard = null;
        }

        function dragEndVisita(e) {
            if (draggedCard) {
                draggedCard.style.opacity = '1';
            }
            draggedCard = null;
        }

        let visitaEmEdicao = null;

        function abrirDetalhesVisitaReuniaoModal(visitaIdx) {
            const visita = app.visitasReunioes[visitaIdx];
            
            if (!visita) return;

            visitaEmEdicao = visitaIdx;

            const tipoLabel = {
                'presencial': '🏢 Presencial',
                'online': '💻 Online/Reunião',
                'hibrida': '🔄 Híbrida'
            };

            const statusLabel = {
                'agendada': '📅 Agendada',
                'remarcada': '🔄 Remarcada',
                'realizada': '✔️ Realizada',
                'cancelada': '❌ Cancelada'
            };

            // Preencher visualização
            document.getElementById('modalDetalhesVisitaTitulo').textContent = `📅 ${visita.cliente}`;
            document.getElementById('detVisitaCliente').textContent = visita.cliente;
            document.getElementById('detVisitaContato').textContent = visita.nomeContato || '(não informado)';
            document.getElementById('detVisitaEmail').textContent = visita.email || '(não informado)';
            document.getElementById('detVisitaTelefone').textContent = visita.telefone || '(não informado)';
            document.getElementById('detVisitaCargo').textContent = visita.cargo || '(não informado)';
            document.getElementById('detVisitaTipo').textContent = tipoLabel[visita.tipo];
            document.getElementById('detVisitaData').textContent = visita.data;
            document.getElementById('detVisitaHora').textContent = visita.hora;
            document.getElementById('detVisitaCidade').textContent = visita.cidade || '(não informado)';
            document.getElementById('detVisitaEstado').textContent = visita.estado || '(não informado)';
            document.getElementById('detVisitaStatus').textContent = statusLabel[visita.status];
            document.getElementById('detVisitaObservacoes').textContent = visita.observacoes || '(nenhuma observação)';

            // Mostrar visualização
            document.getElementById('secaoVisualizacaoVisita').style.display = 'block';
            document.getElementById('secaoEdicaoVisita').style.display = 'none';

            // Abrir modal
            document.getElementById('modalDetalhesVisitaReuniao').classList.add('active');
        }

        function closeModalDetalhesVisitaReuniao() {
            document.getElementById('modalDetalhesVisitaReuniao').classList.remove('active');
            visitaEmEdicao = null;
        }

        function abrirEdicaoVisita() {
            if (visitaEmEdicao === null) return;

            const visita = app.visitasReunioes[visitaEmEdicao];
            
            // Converter data para ISO (YYYY-MM-DD)
            const [dia, mes, ano] = visita.data.split('/');
            const dataISO = `${ano}-${mes}-${dia}`;

            // Preencher formulário de edição
            document.getElementById('editVisitaCliente').value = visita.cliente;
            document.getElementById('editVisitaContato').value = visita.nomeContato || '';
            document.getElementById('editVisitaEmail').value = visita.email || '';
            document.getElementById('editVisitaTelefone').value = visita.telefone || '';
            document.getElementById('editVisitaCargo').value = visita.cargo || '';
            document.getElementById('editVisitaTipo').value = visita.tipo;
            document.getElementById('editVisitaData').value = dataISO;
            document.getElementById('editVisitaHora').value = visita.hora;
            document.getElementById('editVisitaEstado').value = visita.estado || '';
            
            // Carregar cidades do estado
            if (visita.estado) {
                const selectCidade = document.getElementById('editVisitaCidade');
                selectCidade.innerHTML = '<option value="">Selecione Cidade...</option>';
                
                if (cidadesPorEstado[visita.estado]) {
                    cidadesPorEstado[visita.estado].forEach(cidade => {
                        const option = document.createElement('option');
                        option.value = cidade;
                        option.textContent = cidade;
                        if (cidade === visita.cidade) {
                            option.selected = true;
                        }
                        selectCidade.appendChild(option);
                    });
                }
            }
            
            document.getElementById('editVisitaStatus').value = visita.status;
            document.getElementById('editVisitaObservacoes').value = visita.observacoes || '';

            // Trocar para modo edição
            document.getElementById('secaoVisualizacaoVisita').style.display = 'none';
            document.getElementById('secaoEdicaoVisita').style.display = 'block';
        }

        function cancelarEdicaoVisita() {
            document.getElementById('secaoVisualizacaoVisita').style.display = 'block';
            document.getElementById('secaoEdicaoVisita').style.display = 'none';
        }

        function atualizarCidadesNova() {
            const estado = document.getElementById('novaVisitaEstado').value;
            const selectCidade = document.getElementById('novaVisitaCidade');
            
            selectCidade.innerHTML = '<option value="">Selecione Cidade...</option>';
            
            if (estado && cidadesPorEstado[estado]) {
                cidadesPorEstado[estado].forEach(cidade => {
                    const option = document.createElement('option');
                    option.value = cidade;
                    option.textContent = cidade;
                    selectCidade.appendChild(option);
                });
            }
        }

        function atualizarCidadesEdicao() {
            const estado = document.getElementById('editVisitaEstado').value;
            const selectCidade = document.getElementById('editVisitaCidade');
            
            selectCidade.innerHTML = '<option value="">Selecione Cidade...</option>';
            
            if (estado && cidadesPorEstado[estado]) {
                cidadesPorEstado[estado].forEach(cidade => {
                    const option = document.createElement('option');
                    option.value = cidade;
                    option.textContent = cidade;
                    selectCidade.appendChild(option);
                });
            }
        }

        async function salvarEdicaoVisita() {
            if (visitaEmEdicao === null) return;

            const visita = app.visitasReunioes[visitaEmEdicao];

            // Validar campos obrigatórios
            const cliente = document.getElementById('editVisitaCliente').value.trim();
            const data = document.getElementById('editVisitaData').value;
            const hora = document.getElementById('editVisitaHora').value;
            const estado = document.getElementById('editVisitaEstado').value.trim();
            const cidade = document.getElementById('editVisitaCidade').value.trim();

            if (!cliente || !data || !hora || !estado || !cidade) {
                alert('Preencha: Cliente, Estado, Cidade, Data e Hora');
                return;
            }

            // Converter data para formato brasileiro
            const [ano, mesData, diaData] = data.split('-');
            const dataFormatada = `${diaData}/${mesData}/${ano}`;

            // Snapshot para rollback
            const snapshot = { ...visita };

            // Atualizar visita
            visita.cliente = cliente;
            visita.nomeContato = document.getElementById('editVisitaContato').value.trim();
            visita.email = document.getElementById('editVisitaEmail').value.trim();
            visita.telefone = document.getElementById('editVisitaTelefone').value.trim();
            visita.cargo = document.getElementById('editVisitaCargo').value.trim();
            visita.tipo = document.getElementById('editVisitaTipo').value;
            visita.data = dataFormatada;
            visita.dataISO = data;
            visita.hora = hora;
            visita.cidade = cidade;
            visita.estado = estado;
            visita.status = document.getElementById('editVisitaStatus').value;
            visita.observacoes = document.getElementById('editVisitaObservacoes').value.trim();

            try {
                await salvar();
                renderizarKanbanVisitasReunioes();
                closeModalDetalhesVisitaReuniao();
                alert('✓ Visita/Reunião atualizada com sucesso!');
            } catch (err) {
                // Rollback
                Object.assign(visita, snapshot);
                localStorage.setItem('visitasReunioes', JSON.stringify(app.visitasReunioes));
                alert('❌ Erro ao atualizar no banco. Alterações revertidas.');
            }
        }

        function abrirDetalhesVisitaReuniao(visitaIdx, status) {
            // Manter função antiga para compatibilidade
            abrirDetalhesVisitaReuniaoModal(visitaIdx);
        }

        function mudarMesVisitaFiltro() {
            const mes = document.getElementById('mesVisitaSelecionado').value;
            const ano = document.getElementById('anoVisitaSelecionado').value;
            const nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
            document.getElementById('filtroMesVisitasLabelKanban').textContent = `${nomesMeses[mes - 1]}/${ano}`;
            renderizarKanbanVisitasReunioes();
        }

        function filtrarHoje() {
            const hoje = new Date();
            document.getElementById('mesVisitaSelecionado').value = (hoje.getMonth() + 1).toString();
            document.getElementById('anoVisitaSelecionado').value = hoje.getFullYear().toString();
            document.getElementById('filtroTipoVisita').value = '';
            mudarMesVisitaFiltro();
        }

        function filtrarSemana() {
            const hoje = new Date();
            const mesAtual = hoje.getMonth() + 1;
            const anoAtual = hoje.getFullYear();
            
            document.getElementById('mesVisitaSelecionado').value = mesAtual.toString();
            document.getElementById('anoVisitaSelecionado').value = anoAtual.toString();
            document.getElementById('filtroTipoVisita').value = '';
            
            // Armazenar filtro de semana
            window.filtroSemana = true;
            window.dataInicio = hoje;
            window.dataFim = new Date(hoje.getTime() + (7 * 24 * 60 * 60 * 1000));
            
            renderizarKanbanVisitasReunioes();
        }

        function filtrarAno() {
            const hoje = new Date();
            const anoAtual = hoje.getFullYear();
            
            // Mostrar todas as visitas do ano (jan a dez)
            document.getElementById('mesVisitaSelecionado').value = '1';
            document.getElementById('anoVisitaSelecionado').value = anoAtual.toString();
            document.getElementById('filtroTipoVisita').value = '';
            
            // Armazenar filtro de ano
            window.filtroAno = true;
            
            renderizarKanbanVisitasReunioes();
        }

        function filtrarPorTipo() {
            // Limpar filtros temporários
            window.filtroSemana = false;
            window.filtroAno = false;
            
            renderizarKanbanVisitasReunioes();
        }

        function voltarMesAtual() {
            // Compatibilidade com código antigo
            filtrarHoje();
        }

        // Funções de Integrador
        function alternarSubsidioHacoEdicao(checked) {
            const campo = document.getElementById('camposSubsidioEdicao');
            if (checked) {
                campo.style.display = 'block';
            } else {
                campo.style.display = 'none';
            }
        }

        function alternarImpressoraComodatoEdicao(checked) {
            const campo = document.getElementById('camposImpressoraEdicao');
            if (checked) {
                campo.style.display = 'block';
            } else {
                campo.style.display = 'none';
            }
        }

        function adicionarModeloEtiquetaEdicao() {
            if (oportunidadeEmVisualizacao === null) return;
            
            const input = document.getElementById('editNovoModeloEtiqueta');
            const modelo = input.value.trim();
            
            if (!modelo) {
                alert('Digite o modelo');
                return;
            }
            
            if (!app.oportunidades[oportunidadeEmVisualizacao].integrador) {
                app.oportunidades[oportunidadeEmVisualizacao].integrador = {};
            }
            
            if (!app.oportunidades[oportunidadeEmVisualizacao].integrador.modelosEtiqueta) {
                app.oportunidades[oportunidadeEmVisualizacao].integrador.modelosEtiqueta = [];
            }
            
            app.oportunidades[oportunidadeEmVisualizacao].integrador.modelosEtiqueta.push(modelo);
            input.value = '';
            renderizarModelosEtiquetaEdicao();
        }

        function removerModeloEtiquetaEdicao(idx) {
            if (oportunidadeEmVisualizacao === null) return;
            
            if (confirm('Remover este modelo?')) {
                app.oportunidades[oportunidadeEmVisualizacao].integrador.modelosEtiqueta.splice(idx, 1);
                renderizarModelosEtiquetaEdicao();
            }
        }

        function renderizarModelosEtiquetaEdicao() {
            const container = document.getElementById('editModelosEtiquetaLista');
            const modelos = app.oportunidades[oportunidadeEmVisualizacao]?.integrador?.modelosEtiqueta || [];
            
            if (modelos.length === 0) {
                container.innerHTML = '<p style="color: #999; font-size: 12px;">Nenhum modelo adicionado</p>';
            } else {
                container.innerHTML = modelos.map((m, idx) => `
                    <div style="display: flex; gap: 8px; margin-bottom: 8px; align-items: center;">
                        <input type="text" value="${m}" readonly style="flex: 1; background-color: #e0e0e0; padding: 8px;">
                        <button class="btn-danger" onclick="removerModeloEtiquetaEdicao(${idx})" style="padding: 8px 12px;">🗑️</button>
                    </div>
                `).join('');
            }
        }

        function abrirEditarOportunidadeDetalhes() {
            if (oportunidadeEmVisualizacao === null) return;
            
            const o = app.oportunidades[oportunidadeEmVisualizacao];
            
            document.getElementById('editNomeOportunidade').value = o.nome;
            document.getElementById('editClienteOportunidade').value = o.cliente || '';
            document.getElementById('editContatoOportunidade').value = o.contato;
            document.getElementById('editCargoOportunidade').value = o.cargo || '';
            document.getElementById('editEmailOportunidade').value = o.email;
            document.getElementById('editTelefoneOportunidade').value = o.telefone;
            document.getElementById('editCidadeOportunidade').value = o.cidade;
            document.getElementById('editEstadoOportunidade').value = o.estado;
            document.getElementById('editValorOportunidade').value = o.valor;
            document.getElementById('editTemperaturaOportunidade').value = o.temperatura;
            
            // Preencher Integrador
            document.getElementById('editIntegrador').value = o.integrador?.nome || '';
            document.getElementById('editComissaoIntegrador').value = o.integrador?.comissao || '';
            document.getElementById('editErpCliente').value = o.integrador?.erpCliente || '';
            document.getElementById('editConsumoMensal').value = o.integrador?.consumoMensal || '';
            document.getElementById('editSubsidioHaco').value = o.integrador?.subsidioHaco ? 'true' : 'false';
            document.getElementById('editImpressoraComodato').value = o.integrador?.impressoraComodato ? 'true' : 'false';
            document.getElementById('editEquipamentos').value = o.integrador?.equipamentos || '';
            document.getElementById('editModeloImpressora').value = o.integrador?.modeloImpressora || '';
            document.getElementById('editPrecoImpressora').value = o.integrador?.precoImpressora || '';
            document.getElementById('editMensalidadeSistema').value = o.integrador?.mensalidadeSistema || '';
            document.getElementById('editTevePOC').value = o.integrador?.tevePOC ? 'true' : 'false';
            
            // Renderizar modelos de etiqueta
            renderizarModelosEtiquetaEdicao();
            
            // Mostrar/ocultar campos condicionais
            alternarSubsidioHacoEdicao(o.integrador?.subsidioHaco ? true : false);
            alternarImpressoraComodatoEdicao(o.integrador?.impressoraComodato ? true : false);
            
            document.getElementById('modalEditarOportunidadeDetalhes').classList.add('active');
        }

        function closeModalEditarOportunidadeDetalhes() {
            document.getElementById('modalEditarOportunidadeDetalhes').classList.remove('active');
        }

        function salvarEdicaoOportunidadeDetalhes() {
            if (oportunidadeEmVisualizacao === null) return;
            
            const o = app.oportunidades[oportunidadeEmVisualizacao];
            
            o.nome = document.getElementById('editNomeOportunidade').value;
            o.cliente = document.getElementById('editClienteOportunidade').value;
            o.contato = document.getElementById('editContatoOportunidade').value;
            o.cargo = document.getElementById('editCargoOportunidade').value;
            o.email = document.getElementById('editEmailOportunidade').value;
            o.telefone = document.getElementById('editTelefoneOportunidade').value;
            o.cidade = document.getElementById('editCidadeOportunidade').value;
            o.estado = document.getElementById('editEstadoOportunidade').value;
            o.valor = parseFloat(document.getElementById('editValorOportunidade').value) || 0;
            o.temperatura = document.getElementById('editTemperaturaOportunidade').value;
            
            // Salvar Integrador
            o.integrador = {
                nome: document.getElementById('editIntegrador').value,
                comissao: parseFloat(document.getElementById('editComissaoIntegrador').value) || 0,
                erpCliente: document.getElementById('editErpCliente').value,
                consumoMensal: parseInt(document.getElementById('editConsumoMensal').value) || 0,
                modelosEtiqueta: app.oportunidades[oportunidadeEmVisualizacao].integrador?.modelosEtiqueta || [],
                subsidioHaco: document.getElementById('editSubsidioHaco').value === 'true',
                equipamentos: parseFloat(document.getElementById('editEquipamentos').value) || 0,
                impressoraComodato: document.getElementById('editImpressoraComodato').value === 'true',
                modeloImpressora: document.getElementById('editModeloImpressora').value,
                precoImpressora: parseFloat(document.getElementById('editPrecoImpressora').value) || 0,
                mensalidadeSistema: parseFloat(document.getElementById('editMensalidadeSistema').value) || 0,
                tevePOC: document.getElementById('editTevePOC').value === 'true'
            };
            
            salvar();
            renderKanban();
            closeModalEditarOportunidadeDetalhes();
            
            // Atualizar detalhes
            abrirDetalhesOportunidade(oportunidadeEmVisualizacao);
            alert('✓ Oportunidade atualizada com sucesso!');
        }

        // Funções para Integrador
        function alternarSubsidioHacoEdicao(ativo) {
            const campo = document.getElementById('camposSubsidioEdicao');
            if (ativo) {
                campo.style.display = 'block';
            } else {
                campo.style.display = 'none';
            }
        }

        function alternarImpressoraComodatoEdicao(ativo) {
            const campo = document.getElementById('camposImpressoraEdicao');
            if (ativo) {
                campo.style.display = 'block';
            } else {
                campo.style.display = 'none';
            }
        }

        function adicionarModeloEtiquetaEdicao() {
            const input = document.getElementById('editNovoModeloEtiqueta');
            const modelo = input.value.trim();
            
            if (!modelo) {
                alert('Digite o modelo');
                return;
            }
            
            if (!app.oportunidades[oportunidadeEmVisualizacao].integrador) {
                app.oportunidades[oportunidadeEmVisualizacao].integrador = {};
            }
            
            if (!app.oportunidades[oportunidadeEmVisualizacao].integrador.modelosEtiqueta) {
                app.oportunidades[oportunidadeEmVisualizacao].integrador.modelosEtiqueta = [];
            }
            
            app.oportunidades[oportunidadeEmVisualizacao].integrador.modelosEtiqueta.push(modelo);
            input.value = '';
            renderizarModelosEtiquetaEdicao();
        }

        function removerModeloEtiquetaEdicao(idx) {
            if (confirm('Remover este modelo?')) {
                app.oportunidades[oportunidadeEmVisualizacao].integrador.modelosEtiqueta.splice(idx, 1);
                renderizarModelosEtiquetaEdicao();
            }
        }

        function renderizarModelosEtiquetaEdicao() {
            const container = document.getElementById('editModelosEtiquetaLista');
            const modelos = app.oportunidades[oportunidadeEmVisualizacao]?.integrador?.modelosEtiqueta || [];
            
            container.innerHTML = modelos.map((m, idx) => `
                <div style="display: flex; gap: 8px; margin-bottom: 8px; align-items: center;">
                    <input type="text" value="${m}" readonly style="flex: 1; background-color: #f5f5f5;">
                    <button class="btn-danger" onclick="removerModeloEtiquetaEdicao(${idx})" style="padding: 8px 12px;">🗑️ Remover</button>
                </div>
            `).join('');
        }

        function abrirWhatsApp(telefone, nomeOportunidade) {
            // Remover caracteres especiais do telefone
            const telefoneLimpo = telefone.replace(/\D/g, '');
            
            // Se não tem +55, adiciona (Brasil)
            let telefoneFormatado = telefoneLimpo;
            if (!telefoneLimpo.startsWith('55')) {
                telefoneFormatado = '55' + telefoneLimpo;
            }
            
            // Mensagem padrão
            const mensagem = encodeURIComponent(`Olá! Gostaria de discutir sobre a oportunidade: ${nomeOportunidade}`);
            
            // URL do WhatsApp Web
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefoneFormatado}&text=${mensagem}`;
            
            // Abre em nova aba
            window.open(urlWhatsApp, '_blank');
        }

        let oportunidadeEmGanho = null;

        function abrirModalCadastroClienteOportunidade(idx) {
            oportunidadeEmGanho = idx;
            const oport = app.oportunidades[idx];
            
            // Preencher os campos com dados da oportunidade
            document.getElementById('nomeClienteGanho').value = oport.nome || '';
            document.getElementById('erpClienteGanho').value = '';
            document.getElementById('cidadeClienteGanho').value = oport.cidade || '';
            document.getElementById('estadoClienteGanho').value = oport.estado || '';
            
            document.getElementById('modalCadastroClienteGanho').classList.add('active');
        }

        function closeModalCadastroClienteGanho() {
            document.getElementById('modalCadastroClienteGanho').classList.remove('active');
            // A oportunidade já foi salva em "ganho" na função dropCard
            // Portanto, fechar o modal não faz nada especial
            oportunidadeEmGanho = null;
        }

        function salvarClienteGanho() {
            const nome = document.getElementById('nomeClienteGanho').value;
            const erp = document.getElementById('erpClienteGanho').value;
            const cidade = document.getElementById('cidadeClienteGanho').value;
            const estado = document.getElementById('estadoClienteGanho').value;

            if (!nome || !erp || !cidade || !estado) {
                alert('Preencha todos os campos para cadastrar o cliente');
                return;
            }

            // Cadastrar cliente
            app.clientes[nome] = { erp, cidade, estado };
            salvar();
            preencherClientesFaturamento();
            preencherClientesAgendamento();
            
            // Renderizar kanban novamente
            renderKanban();
            closeModalCadastroClienteGanho();
            
            alert(`🎉 Cliente "${nome}" cadastrado com sucesso!`);
        }

        function atualizarProjetosExibicao() {
            const container = document.getElementById('projetosContainer');
            const projetos = app.projetos.sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));

            if (projetos.length === 0) {
                container.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Nenhum projeto agendado ainda</p>';
                return;
            }

            container.innerHTML = projetos.map((p, idx) => `
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-titulo">${p.cliente}</div>
                        <span class="status-badge">${getStatusLabelProjeto(p.status)}</span>
                    </div>
                    
                    <div class="project-info">
                        <div class="project-info-item">
                            <div class="project-info-label">Data / Hora</div>
                            <div class="project-info-valor">${new Date(p.data).toLocaleDateString('pt-BR')}${p.hora ? ' às ' + p.hora : ''}</div>
                        </div>
                        <div class="project-info-item">
                            <div class="project-info-label">Cidade / Estado</div>
                            <div class="project-info-valor">${p.cidade}${p.estado ? ', ' + p.estado : ''}</div>
                        </div>
                        <div class="project-info-item">
                            <div class="project-info-label">Observações</div>
                            <div class="project-info-valor">${p.obs || '-'}</div>
                        </div>
                    </div>

                    <div class="project-info">
                        <div class="project-info-item" style="grid-column: 1 / -1;">
                            <label>Etapa de Projeto</label>
                            <select onchange="alterarStatusProjeto(${idx}, this.value)" style="padding: 8px; border: 1px solid var(--border); border-radius: 4px;">
                                <option value="novo" ${p.status === 'novo' ? 'selected' : ''}>Novo</option>
                                <option value="negociando" ${p.status === 'negociando' ? 'selected' : ''}>Negociando com Integrador</option>
                                <option value="avaliando" ${p.status === 'avaliando' ? 'selected' : ''}>Avaliando Proposta</option>
                                <option value="assinatura" ${p.status === 'assinatura' ? 'selected' : ''}>Assinatura de Contrato</option>
                                <option value="ganho" ${p.status === 'ganho' ? 'selected' : ''}>Ganho</option>
                            </select>
                        </div>
                        <div class="project-info-item" style="grid-column: 1 / -1;">
                            <label>Status da Visita</label>
                            <select onchange="alterarStatusVisitaProjeto(${idx}, this.value)" style="padding: 8px; border: 1px solid var(--border); border-radius: 4px;">
                                <option value="agendada" ${p.statusVisita === 'agendada' ? 'selected' : ''}>Agendada</option>
                                <option value="ocorrida" ${p.statusVisita === 'ocorrida' ? 'selected' : ''}>Ocorrida</option>
                                <option value="cancelada" ${p.statusVisita === 'cancelada' ? 'selected' : ''}>Cancelada</option>
                                <option value="remarcada" ${p.statusVisita === 'remarcada' ? 'selected' : ''}>Remarcada</option>
                            </select>
                        </div>
                    </div>

                    <div class="timeline">
                        ${p.timeline.map(item => `
                            <div class="timeline-item">
                                <div class="timeline-marker"></div>
                                <div class="timeline-content">
                                    <div class="timeline-date">${item.data} às ${item.hora}</div>
                                    <div class="timeline-title">${item.evento}</div>
                                    <div class="timeline-desc">${item.descricao}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="project-actions">
                        <button class="btn-danger" onclick="deletarProjeto(${idx})">🗑️ Deletar</button>
                    </div>
                </div>
            `).join('');
        }

        function atualizarClientesCarteira() {
            atualizarClientesCarteiraComFiltro();
        }

        function alterarStatusVisita(idx, novoStatus) {
            if (novoStatus === 'remarcada') {
                app.visitaEmRemarcar = idx;
                document.getElementById('modalRemarcar').classList.add('active');
            } else {
                app.visitas[idx].status = novoStatus;
                app.visitas[idx].timeline.push({
                    data: new Date().toLocaleDateString('pt-BR'),
                    hora: new Date().toLocaleTimeString('pt-BR'),
                    evento: getStatusLabelVisita(novoStatus),
                    descricao: `Visita marcada como ${novoStatus}`,
                    editavel: false
                });
                salvar();
                atualizarClientesCarteira();
            }
        }

        async function salvarObservacao(visitaIdx, timelineIdx) {
            const textarea = document.getElementById(`textareaObs_${visitaIdx}_${timelineIdx}`);
            const novoTexto = textarea.value;
            
            if (novoTexto && novoTexto.trim()) {
                const textoAnterior = app.visitas[visitaIdx].timeline[timelineIdx].descricao;
                app.visitas[visitaIdx].timeline[timelineIdx].descricao = novoTexto;
                
                try {
                    await salvar();
                    
                    // Fechar edição
                    const displayDiv = document.getElementById(`obsDisplay_${visitaIdx}_${timelineIdx}`);
                    const editDiv = document.getElementById(`obsEdit_${visitaIdx}_${timelineIdx}`);
                    displayDiv.style.display = 'block';
                    editDiv.style.display = 'none';
                    displayDiv.querySelector('.timeline-desc').textContent = novoTexto;
                    alert('✓ Observação atualizada!');
                } catch (err) {
                    app.visitas[visitaIdx].timeline[timelineIdx].descricao = textoAnterior;
                    localStorage.setItem('visitas', JSON.stringify(app.visitas));
                    alert('❌ Erro ao salvar observação. Tente novamente.');
                }
            } else {
                alert('A observação não pode estar vazia');
            }
        }

        async function adicionarObservacao(visitaIdx) {
            const textarea = document.getElementById(`novaObs_${visitaIdx}`);
            const texto = textarea.value;
            
            if (!texto || !texto.trim()) {
                alert('Digite uma observação antes de registrar');
                return;
            }

            const novaObs = {
                data: new Date().toLocaleDateString('pt-BR'),
                hora: new Date().toLocaleTimeString('pt-BR'),
                evento: '\uD83D\uDCDD Observação',
                descricao: texto,
                editavel: true
            };

            app.visitas[visitaIdx].timeline.push(novaObs);

            try {
                await salvar();
                textarea.value = '';
                atualizarClientesCarteira();
                alert('✓ Observação registrada na timeline!');
            } catch (err) {
                app.visitas[visitaIdx].timeline.pop();
                localStorage.setItem('visitas', JSON.stringify(app.visitas));
                alert('❌ Erro ao salvar observação no banco. Tente novamente.');
            }
        }

        function abrirEdicaoObservacao(visitaIdx, timelineIdx) {
            const displayDiv = document.getElementById(`obsDisplay_${visitaIdx}_${timelineIdx}`);
            const editDiv = document.getElementById(`obsEdit_${visitaIdx}_${timelineIdx}`);
            const textarea = document.getElementById(`textareaObs_${visitaIdx}_${timelineIdx}`);
            
            displayDiv.style.display = 'none';
            editDiv.style.display = 'block';
            textarea.focus();
        }

        function fecharEdicaoObservacao(visitaIdx, timelineIdx) {
            const displayDiv = document.getElementById(`obsDisplay_${visitaIdx}_${timelineIdx}`);
            const editDiv = document.getElementById(`obsEdit_${visitaIdx}_${timelineIdx}`);
            
            displayDiv.style.display = 'block';
            editDiv.style.display = 'none';
        }

        function closeModalRemarcar() {
            document.getElementById('modalRemarcar').classList.remove('active');
            app.visitaEmRemarcar = null;
        }

        async function confirmarRemarcar() {
            if (app.visitaEmRemarcar === null) return;

            const novaData = document.getElementById('novaDataRemarcar').value;
            const novaHora = document.getElementById('novaHoraRemarcar').value;
            const motivo = document.getElementById('motivoRemarcar').value;

            if (!novaData) {
                alert('Preencha a nova data');
                return;
            }

            const visita = app.visitas[app.visitaEmRemarcar];
            const dataAntiga = visita.data;
            const horaAntiga = visita.hora;
            const statusAntigo = visita.status;

            visita.status = 'remarcada';
            visita.data = novaData;
            visita.hora = novaHora || visita.hora;

            const timelineEntry = {
                data: new Date().toLocaleDateString('pt-BR'),
                hora: new Date().toLocaleTimeString('pt-BR'),
                evento: '\uD83D\uDCC5 Remarcada',
                descricao: `Visita remarcada de ${new Date(dataAntiga).toLocaleDateString('pt-BR')}${horaAntiga ? ' às ' + horaAntiga : ''} para ${new Date(novaData).toLocaleDateString('pt-BR')}${novaHora ? ' às ' + novaHora : ''}${motivo ? '. Motivo: ' + motivo : ''}`
            };
            visita.timeline.push(timelineEntry);

            try {
                await salvar();
                renderCalendar();
                closeModalRemarcar();
                document.getElementById('novaDataRemarcar').value = '';
                document.getElementById('novaHoraRemarcar').value = '';
                document.getElementById('motivoRemarcar').value = '';
            } catch (err) {
                // Rollback
                visita.status = statusAntigo;
                visita.data = dataAntiga;
                visita.hora = horaAntiga;
                visita.timeline.pop();
                localStorage.setItem('visitas', JSON.stringify(app.visitas));
                alert('❌ Erro ao remarcar visita no banco. Operação revertida.');
            }
        }

        function alterarStatusProjeto(idx, novoStatus) {
            if (novoStatus === 'ganho') {
                app.projetoEmTransicao = idx;
                document.getElementById('modalErpProjeto').classList.add('active');
            } else {
                app.projetos[idx].status = novoStatus;
                app.projetos[idx].timeline.push({
                    data: new Date().toLocaleDateString('pt-BR'),
                    hora: new Date().toLocaleTimeString('pt-BR'),
                    evento: getStatusLabelProjeto(novoStatus),
                    descricao: `Etapa alterada para ${novoStatus}`
                });
                salvar();
                atualizarProjetosExibicao();
            }
        }

        function alterarStatusVisitaProjeto(idx, novoStatus) {
            app.projetos[idx].statusVisita = novoStatus;
            app.projetos[idx].timeline.push({
                data: new Date().toLocaleDateString('pt-BR'),
                hora: new Date().toLocaleTimeString('pt-BR'),
                evento: getStatusLabelVisita(novoStatus),
                descricao: `Status da visita alterado para ${novoStatus}`
            });
            salvar();
            atualizarProjetosExibicao();
        }

        function closeModalErpProjeto() {
            document.getElementById('modalErpProjeto').classList.remove('active');
            app.projetoEmTransicao = null;
        }

        function confirmarErpProjeto() {
            const erp = document.getElementById('novoErpProjeto').value;
            const cidade = document.getElementById('novoCidadeProjeto').value;
            const estado = document.getElementById('novoEstadoProjeto').value;

            if (!erp || !cidade || !estado) {
                alert('Preencha todos os campos');
                return;
            }

            const projeto = app.projetos[app.projetoEmTransicao];
            const cliente = projeto.cliente;

            app.clientes[cliente] = {erp, cidade, estado};

            const novaVisita = {
                cliente, tipo: 'visita_carteira', tipoVisita: 'novo_projeto',
                data: projeto.data, hora: projeto.hora, cidade, estado,
                status: 'agendada', obs: projeto.obs, erp,
                dataCriacao: new Date().toISOString(),
                timeline: [
                    ...projeto.timeline,
                    {
                        data: new Date().toLocaleDateString('pt-BR'),
                        hora: new Date().toLocaleTimeString('pt-BR'),
                        evento: '🎉 Projeto Ganho',
                        descricao: `Projeto movido para carteira com ERP: ${erp}`
                    }
                ]
            };

            app.visitas.push(novaVisita);
            app.projetos.splice(app.projetoEmTransicao, 1);

            salvar();
            preencherClientesFaturamento();
            preencherClientesAgendamento();
            renderCalendar();
            closeModalErpProjeto();

            document.getElementById('novoErpProjeto').value = '';
            document.getElementById('novoCidadeProjeto').value = '';
            document.getElementById('novoEstadoProjeto').value = '';
        }

        function getStatusLabelVisita(status) {
            const labels = {
                'agendada': '📅 Agendada',
                'ocorrida': '✓ Ocorrida',
                'cancelada': '✗ Cancelada',
                'remarcada': '📅 Remarcada'
            };
            return labels[status] || status;
        }

        function getStatusLabelProjeto(status) {
            const labels = {
                'novo': '🆕 Novo',
                'negociando': '💬 Negociando',
                'avaliando': '📋 Avaliando',
                'assinatura': '✍️ Assinatura',
                'ganho': '🎉 Ganho'
            };
            return labels[status] || status;
        }

        // FUNÇÕES DE BACKUP
        function exportarDados() {
            const dados = {
                faturamentos: app.faturamentos,
                projetos: app.projetos,
                visitas: app.visitas,
                clientes: app.clientes,
                dataExportacao: new Date().toLocaleString('pt-BR')
            };
            
            const json = JSON.stringify(dados, null, 2);
            const blob = new Blob([json], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `haco_backup_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            alert('✅ Dados exportados com sucesso!');
        }

        function importarDados() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = e => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = event => {
                    try {
                        const dados = JSON.parse(event.target.result);
                        
                        app.faturamentos = dados.faturamentos || [];
                        app.projetos = dados.projetos || [];
                        app.visitas = dados.visitas || [];
                        app.clientes = dados.clientes || {};
                        
                        salvar();
                        
                        alert('✅ Dados importados com sucesso!');
                        location.reload();
                    } catch (error) {
                        alert('❌ Erro ao importar arquivo: ' + error.message);
                    }
                };
                reader.readAsText(file);
            };
            input.click();
        }

        async function deletarVisita(idx) {
            if (!confirm('Deletar esta visita?')) return;

            const [removida] = app.visitas.splice(idx, 1);
            localStorage.setItem('visitas', JSON.stringify(app.visitas));
            atualizarClientesCarteira();

            try {
                await salvar();
            } catch (err) {
                app.visitas.splice(idx, 0, removida);
                localStorage.setItem('visitas', JSON.stringify(app.visitas));
                atualizarClientesCarteira();
                alert('❌ Erro ao deletar visita no banco. Operação revertida.');
            }
        }

        async function deletarProjeto(idx) {
            if (!confirm('Deletar este projeto?')) return;

            const [removido] = app.projetos.splice(idx, 1);
            localStorage.setItem('projetos', JSON.stringify(app.projetos));
            atualizarProjetosExibicao();

            try {
                await salvar();
            } catch (err) {
                app.projetos.splice(idx, 0, removido);
                localStorage.setItem('projetos', JSON.stringify(app.projetos));
                atualizarProjetosExibicao();
                alert('❌ Erro ao deletar projeto no banco. Operação revertida.');
            }
        }

        // ===== RELATÓRIOS FUNCTIONS =====
        function obterFiltrosRelatorio() {
            const dataInicial = document.getElementById('dataInicialRelatorio').value || null;
            const dataFinal = document.getElementById('dataFinalRelatorio').value || null;
            const cliente = document.getElementById('clienteRelatorio').value || null;
            const status = document.getElementById('statusRelatorio').value || null;
            return { dataInicial, dataFinal, cliente, status };
        }

        function filtrarDadosPorData(dados, dataInicial, dataFinal) {
            if (!dataInicial && !dataFinal) return dados;
            
            const dateStart = dataInicial ? new Date(dataInicial) : new Date('2000-01-01');
            const dateEnd = dataFinal ? new Date(dataFinal) : new Date('2100-12-31');
            
            return dados.filter(d => {
                const itemDate = new Date(d.data || d.dataCriacao || '2000-01-01');
                return itemDate >= dateStart && itemDate <= dateEnd;
            });
        }

        function gerarRelatorioPDF(tipo) {
            const { jsPDF } = window.jspdf;
            const filtros = obterFiltrosRelatorio();
            const doc = new jsPDF();
            const pageHeight = doc.internal.pageSize.getHeight();
            let yPosition = 20;

            // Cabeçalho
            doc.setFontSize(18);
            doc.text('HACO RFID 2026 - Relatório ' + tipo.toUpperCase(), 15, yPosition);
            yPosition += 10;

            doc.setFontSize(10);
            doc.setTextColor(100);
            doc.text(`Data do Relatório: ${new Date().toLocaleString('pt-BR')}`, 15, yPosition);
            yPosition += 5;
            
            if (filtros.dataInicial || filtros.dataFinal) {
                doc.text(`Período: ${filtros.dataInicial || 'início'} a ${filtros.dataFinal || 'fim'}`, 15, yPosition);
                yPosition += 5;
            }
            
            doc.setTextColor(0);
            yPosition += 10;

            if (tipo === 'faturamento') {
                gerarRelatorioPDFFaturamento(doc, yPosition, filtros);
            } else if (tipo === 'clientes') {
                gerarRelatorioPDFClientes(doc, yPosition, filtros);
            } else if (tipo === 'pipeline') {
                gerarRelatorioPDFPipeline(doc, yPosition, filtros);
            } else if (tipo === 'visitas') {
                gerarRelatorioPDFVisitas(doc, yPosition, filtros);
            } else if (tipo === 'executivo') {
                gerarRelatorioPDFExecutivo(doc, yPosition, filtros);
            }

            doc.save(`relatorio_${tipo}_${new Date().toISOString().split('T')[0]}.pdf`);
            alert('✓ Relatório PDF gerado com sucesso!');
        }

        function gerarRelatorioPDFFaturamento(doc, yPosition, filtros) {
            const faturamentos = filtrarDadosPorData(app.faturamentos, filtros.dataInicial, filtros.dataFinal);
            
            const faturadosApenas = faturamentos.filter(f => (f.statusFaturado || 'pendente') === 'sim');
            
            const tableData = faturadosApenas.map(f => [
                new Date(f.data).toLocaleDateString('pt-BR'),
                f.cliente,
                f.erp,
                `R$ ${f.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`
            ]);

            const totalFaturado = faturadosApenas.reduce((sum, f) => sum + f.valor, 0);
            
            doc.autoTable({
                head: [['Data', 'Cliente', 'ERP', 'Valor']],
                body: tableData,
                startY: yPosition,
                theme: 'grid',
                styles: { fontSize: 10 }
            });

            yPosition = doc.lastAutoTable.finalY + 15;
            doc.setFontSize(12);
            doc.text(`TOTAL FATURADO: R$ ${totalFaturado.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`, 15, yPosition);
            doc.text(`Quantidade de registros (Faturados): ${faturadosApenas.length}`, 15, yPosition + 7);
        }

        function gerarRelatorioPDFClientes(doc, yPosition, filtros) {
            const tableData = Object.entries(app.clientes).map(([nome, dados]) => [
                nome,
                dados.erp,
                dados.cidade || '-',
                dados.estado || '-'
            ]);

            doc.autoTable({
                head: [['Cliente', 'ERP', 'Cidade', 'Estado']],
                body: tableData,
                startY: yPosition,
                theme: 'grid',
                styles: { fontSize: 10 }
            });

            yPosition = doc.lastAutoTable.finalY + 15;
            doc.setFontSize(12);
            doc.text(`Total de clientes: ${Object.keys(app.clientes).length}`, 15, yPosition);
        }

        function gerarRelatorioPDFPipeline(doc, yPosition, filtros) {
            const etapas = ['novo', 'negociando', 'avaliando', 'assinatura', 'ganho'];
            const etapasLabels = ['Novo', 'Negociando', 'Avaliando', 'Assinatura', 'Ganho'];
            const tableData = [];

            etapas.forEach((etapa, idx) => {
                const oportunidades = app.oportunidades.filter(o => o.etapa === etapa);
                const totalValor = oportunidades.reduce((sum, o) => sum + (o.valor || 0), 0);
                tableData.push([
                    etapasLabels[idx],
                    oportunidades.length,
                    `R$ ${totalValor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`
                ]);
            });

            doc.autoTable({
                head: [['Etapa', 'Quantidade', 'Valor Total']],
                body: tableData,
                startY: yPosition,
                theme: 'grid',
                styles: { fontSize: 10 }
            });

            yPosition = doc.lastAutoTable.finalY + 15;
            const totalOportunidades = app.oportunidades.length;
            const totalValorPipeline = app.oportunidades.reduce((sum, o) => sum + (o.valor || 0), 0);
            doc.setFontSize(12);
            doc.text(`Total de oportunidades: ${totalOportunidades}`, 15, yPosition);
            doc.text(`Valor total do pipeline: R$ ${totalValorPipeline.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`, 15, yPosition + 7);
        }

        function gerarRelatorioPDFVisitas(doc, yPosition, filtros) {
            const visitas = filtrarDadosPorData(app.visitas, filtros.dataInicial, filtros.dataFinal);
            
            const tableData = visitas.map(v => [
                new Date(v.data).toLocaleDateString('pt-BR'),
                v.cliente,
                v.nomeContato || '-',
                v.status.toUpperCase()
            ]);

            doc.autoTable({
                head: [['Data', 'Cliente', 'Contato', 'Status']],
                body: tableData,
                startY: yPosition,
                theme: 'grid',
                styles: { fontSize: 10 }
            });

            yPosition = doc.lastAutoTable.finalY + 15;
            const visitasOcorridas = visitas.filter(v => v.status === 'ocorrida').length;
            doc.setFontSize(12);
            doc.text(`Total de visitas: ${visitas.length}`, 15, yPosition);
            doc.text(`Visitas realizadas: ${visitasOcorridas}`, 15, yPosition + 7);
        }

        function gerarRelatorioPDFExecutivo(doc, yPosition, filtros) {
            // Resumo geral
            doc.setFontSize(12);
            doc.text('RESUMO EXECUTIVO', 15, yPosition);
            yPosition += 10;

            const metaMes = 485663.95;
            const faturado = app.faturamentos.reduce((sum, f) => sum + f.valor, 0);
            const percentualMeta = ((faturado / metaMes) * 100).toFixed(1);

            const tableData = [
                ['Métrica', 'Valor'],
                ['Total de Clientes', Object.keys(app.clientes).length],
                ['Total de Oportunidades', app.oportunidades.length],
                ['Total de Visitas Agendadas', app.visitas.length],
                ['Faturamento Total 2026', `R$ ${faturado.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`],
                ['Meta do Mês', `R$ ${metaMes.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`],
                ['% da Meta', `${percentualMeta}%`]
            ];

            doc.autoTable({
                body: tableData,
                startY: yPosition,
                theme: 'grid',
                styles: { fontSize: 11 }
            });
        }

        function gerarRelatorioExcel(tipo) {
            let dados = [];
            let nomeAbas = {};

            if (tipo === 'faturamento') {
                const filtros = obterFiltrosRelatorio();
                dados = filtrarDadosPorData(app.faturamentos, filtros.dataInicial, filtros.dataFinal).map(f => ({
                    'Data': new Date(f.data).toLocaleDateString('pt-BR'),
                    'Cliente': f.cliente,
                    'ERP': f.erp,
                    'Valor': f.valor
                }));
                nomeAbas = { 0: 'Faturamentos' };
            } else if (tipo === 'clientes') {
                dados = Object.entries(app.clientes).map(([nome, d]) => ({
                    'Cliente': nome,
                    'ERP': d.erp,
                    'Cidade': d.cidade || '',
                    'Estado': d.estado || ''
                }));
                nomeAbas = { 0: 'Clientes' };
            } else if (tipo === 'pipeline') {
                const etapas = ['novo', 'negociando', 'avaliando', 'assinatura', 'ganho'];
                const etapasLabels = ['Novo', 'Negociando', 'Avaliando', 'Assinatura', 'Ganho'];
                dados = etapas.map((etapa, idx) => {
                    const oportunidades = app.oportunidades.filter(o => o.etapa === etapa);
                    const totalValor = oportunidades.reduce((sum, o) => sum + (o.valor || 0), 0);
                    return {
                        'Etapa': etapasLabels[idx],
                        'Quantidade': oportunidades.length,
                        'Valor Total': totalValor
                    };
                });
                nomeAbas = { 0: 'Pipeline' };
            } else if (tipo === 'visitas') {
                const filtros = obterFiltrosRelatorio();
                dados = filtrarDadosPorData(app.visitas, filtros.dataInicial, filtros.dataFinal).map(v => ({
                    'Data': new Date(v.data).toLocaleDateString('pt-BR'),
                    'Cliente': v.cliente,
                    'Contato': v.nomeContato || '',
                    'Status': v.status
                }));
                nomeAbas = { 0: 'Visitas' };
            } else if (tipo === 'executivo') {
                const metaMes = 485663.95;
                const faturado = app.faturamentos.reduce((sum, f) => sum + f.valor, 0);
                dados = [
                    { 'Métrica': 'Total de Clientes', 'Valor': Object.keys(app.clientes).length },
                    { 'Métrica': 'Total de Oportunidades', 'Valor': app.oportunidades.length },
                    { 'Métrica': 'Total de Visitas', 'Valor': app.visitas.length },
                    { 'Métrica': 'Faturamento Total', 'Valor': faturado },
                    { 'Métrica': 'Meta do Mês', 'Valor': metaMes },
                    { 'Métrica': '% da Meta', 'Valor': ((faturado / metaMes) * 100).toFixed(1) + '%' }
                ];
                nomeAbas = { 0: 'Resumo' };
            }

            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.json_to_sheet(dados);
            XLSX.utils.sheet_add_aoa(ws, [[]], 0);
            ws['!cols'] = [{ wch: 15 }, { wch: 20 }, { wch: 15 }, { wch: 15 }];
            XLSX.utils.book_append_sheet(wb, ws, Object.values(nomeAbas)[0] || 'Sheet1');
            XLSX.writeFile(wb, `relatorio_${tipo}_${new Date().toISOString().split('T')[0]}.xlsx`);

            alert('✓ Relatório Excel gerado com sucesso!');
        }

        // ===== SETTINGS FUNCTIONS =====
        function toggleDarkMode() {
            const isDarkMode = document.documentElement.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            document.getElementById('darkModeToggle').checked = isDarkMode;
            salvar();
        }

        function initializeDarkMode() {
            const isDarkMode = localStorage.getItem('darkMode') === 'true';
            if (isDarkMode) {
                document.documentElement.classList.add('dark-mode');
                document.getElementById('darkModeToggle').checked = true;
            }
        }

        function mudarTamanhoPagina(tamanho) {
            let fontSizeBase = '14px';
            let fontSizeH2 = '24px';
            let fontSizeH3 = '18px';

            if (tamanho === 'pequeno') {
                fontSizeBase = '12px';
                fontSizeH2 = '20px';
                fontSizeH3 = '16px';
            } else if (tamanho === 'grande') {
                fontSizeBase = '16px';
                fontSizeH2 = '28px';
                fontSizeH3 = '20px';
            }

            document.body.style.fontSize = fontSizeBase;
            Array.from(document.querySelectorAll('h2')).forEach(h => h.style.fontSize = fontSizeH2);
            Array.from(document.querySelectorAll('h3')).forEach(h => h.style.fontSize = fontSizeH3);

            localStorage.setItem('fontSizeMode', tamanho);
        }

        function initializeFontSize() {
            const fontSizeMode = localStorage.getItem('fontSizeMode') || 'normal';
            mudarTamanhoPagina(fontSizeMode);
        }

        function calcularTamanhoDados() {
            let totalSize = 0;
            for (let key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    totalSize += localStorage[key].length + key.length;
                }
            }
            const sizeInKB = (totalSize / 1024).toFixed(2);
            const sizeInMB = (sizeInKB / 1024).toFixed(2);
            
            if (sizeInMB > 1) {
                return `${sizeInMB} MB`;
            } else {
                return `${sizeInKB} KB`;
            }
        }

        function atualizarTamanhoDados() {
            document.getElementById('tamanhoStorage').textContent = calcularTamanhoDados();
        }

        function exportarDadosJSON() {
            const dados = {
                clientes: app.clientes,
                projetos: app.projetos,
                visitas: app.visitas,
                faturamentos: app.faturamentos,
                oportunidades: app.oportunidades,
                dataExportacao: new Date().toLocaleString('pt-BR')
            };

            const dataStr = JSON.stringify(dados, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `backup_haco_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            alert('✓ Backup realizado com sucesso!');
        }

        async function limparDados() {
            if (confirm('⚠️ AVISO: Isso deletará TODOS os dados do sistema!\n\nTem certeza?')) {
                if (confirm('Confirmar novamente? Esta ação é irreversível!')) {
                    const btn = event.target.closest('button');
                    const originalTxt = btn.innerHTML;
                    
                    try {
                        btn.disabled = true;
                        btn.innerHTML = '⌛ Limpando Nuvem...';

                        // 1. Limpa o banco de dados na nuvem (FastAPI/SQL)
                        const response = await fetch('/api/sync', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({})
                        });

                        if (!response.ok) {
                            throw new Error('Erro ao limpar o banco na nuvem.');
                        }

                        // 2. Limpa o navegador, mas preserva a flag de que já foi inicializado
                        localStorage.clear();
                        localStorage.setItem('crm_inicializado', 'true');
                        
                        alert('✓ Sistema reiniciado com sucesso!');
                        location.reload();
                    } catch (error) {
                        console.error('Falha ao limpar:', error);
                        btn.disabled = false;
                        btn.innerHTML = originalTxt;
                        alert('❌ Erro ao limpar dados na nuvem. Verifique sua conexão.');
                    }
                }
            }
        }

        function _dbSetStatus(estado, msg) {
            const dot = document.getElementById('fbDot');
            const txt = document.getElementById('fbStatusTxt');
            if(dot) { dot.style.background = estado === 'erro' ? '#ef4444' : (estado==='conectado' ? '#22c55e' : '#f59e0b'); }
            if(txt) { txt.textContent = msg; }
        }

        async function carregarBancoSQL() {
            _dbSetStatus('conectando', 'SQLite...');
            try {
                const response = await fetch('/api/sync');
                if (response.ok) {
                    const dados = await response.json();
                    if (dados && Object.keys(dados).length > 0) {
                        if (dados.faturamentos) localStorage.setItem('faturamentos', JSON.stringify(dados.faturamentos));
                        if (dados.clientes) localStorage.setItem('clientes', JSON.stringify(dados.clientes));
                        if (dados.projetos) localStorage.setItem('projetos', JSON.stringify(dados.projetos));
                        if (dados.visitas) localStorage.setItem('visitas', JSON.stringify(dados.visitas));
                        if (dados.oportunidades) localStorage.setItem('oportunidades', JSON.stringify(dados.oportunidades));
                        if (dados.visitasReunioes) localStorage.setItem('visitasReunioes', JSON.stringify(dados.visitasReunioes));
                        
                        app.faturamentos = dados.faturamentos || [];
                        app.projetos = dados.projetos || [];
                        app.visitas = dados.visitas || [];
                        app.clientes = dados.clientes || {};
                        app.oportunidades = dados.oportunidades || [];
                        app.visitasReunioes = dados.visitasReunioes || [];
                        
                        _dbSetStatus('conectado', '✅ Banco de Dados ON');
                        atualizarDashboard();
                    } else {
                        _dbSetStatus('conectado', '✅ DB Novo');
                        // Se não tem banco, salva os dados default que estão em memória no Servidor!
                        fazerBackupLocal(false);
                    }
                }
            } catch (err) { _dbSetStatus('erro', '❌ API Offline'); }
        }

        function fazerBackupLocal(manual) {
            _dbSetStatus('conectando', 'Salvando...');
            const payload = {
                faturamentos: app.faturamentos, clientes: app.clientes, projetos: app.projetos,
                visitas: app.visitas, oportunidades: app.oportunidades, visitasReunioes: app.visitasReunioes
            };
            // Retorna a Promise para que callers possam fazer await
            return fetch('/api/sync', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
            .then(() => { _dbSetStatus('conectado', '✅ Salvo no Banco'); if(manual) alert('Salvo no banco de dados com sucesso!'); })
            .catch(() => { _dbSetStatus('erro', '❌ Falha API'); if(manual) alert('Erro ao salvar no banco local (FastAPI OFF).'); });
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Inicializar Banco SQL do FastAPI PRIMEIRO
            carregarBancoSQL();
            
            // Inicializar settings
            initializeDarkMode();
            initializeFontSize();
            atualizarTamanhoDados();
            
            preencherClientesFaturamento();
            preencherClientesAgendamento();
            document.getElementById('dataFaturamento').valueAsDate = new Date();
            atualizarDashboard();
            atualizarTabelaClientes();
            
            // Inicializar valores do filtro de visitas
            document.getElementById('mesVisitaSelecionado').value = app.currentMonth;
            document.getElementById('anoVisitaSelecionado').value = app.currentYear;
            
            atualizarClientesCarteira();
            renderCalendarVisitas();
            inicializarConsulta();
        });

        // ═══════════════════════════════════════════════════════════
        // GERADOR DE PROPOSTA PDF — HACO RFID 2026
        // ═══════════════════════════════════════════════════════════

        function propMascaraCNPJ(input) {
            let v = input.value.replace(/\D/g, '').slice(0, 14);
            v = v.replace(/^(\d{2})(\d)/, '$1.$2');
            v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');
            v = v.replace(/(\d{4})(\d)/, '$1-$2');
            input.value = v;
        }
        function propMascaraTel(input) {
            let v = input.value.replace(/\D/g, '').slice(0, 11);
            if (v.length <= 10) v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            else v = v.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            input.value = v;
        }

        function _gerarNumProposta() {
            const seq = parseInt(localStorage.getItem('haco_prop_seq') || '0') + 1;
            localStorage.setItem('haco_prop_seq', seq);
            return `PROP-${new Date().getFullYear()}-${String(seq).padStart(4, '0')}`;
        }

        function _fmtBRL(v) {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v || 0);
        }

        function abrirModalProposta() {
            if (!carrinhoConsulta || carrinhoConsulta.length === 0) {
                alert('⚠️ Adicione pelo menos um produto ao carrinho antes de gerar a proposta.\n\nBusque um produto e clique em "Adicionar".');
                return;
            }

            // Número da proposta
            document.getElementById('prop_numero').value = _gerarNumProposta();

            // Validade: +15 dias
            const val = new Date();
            val.setDate(val.getDate() + 15);
            document.getElementById('prop_validade').value = val.toISOString().split('T')[0];

            // Badge quantidade
            document.getElementById('propBadgeQtd').textContent =
                carrinhoConsulta.length + ' produto' + (carrinhoConsulta.length !== 1 ? 's' : '');

            // Condição financeira detectada
            const cfVal  = parseFloat(document.getElementById('cfInput').value) || 0;
            const cfLabel = window._prazoLabelAtual || '';
            const cfTexto = cfLabel ? `${cfLabel} (${cfVal > 0 ? '+' : ''}${cfVal.toFixed(1)}%)` : (cfVal !== 0 ? `${cfVal > 0 ? '+' : ''}${cfVal.toFixed(1)}%` : '—');
            document.getElementById('propCFTexto').textContent = cfTexto;
            document.getElementById('prop_condicao').value = cfLabel;
            document.getElementById('prop_custoFin').value = cfVal !== 0 ? cfVal.toFixed(1).replace('.', ',') + '%' : '';

            // Monta resumo do carrinho
            let total = 0;
            let html = '';
            carrinhoConsulta.forEach(item => {
                const sub = (item.preco || 0) * (item.quantidade || 1);
                total += sub;
                html += `<div class="prop-resumo-row">
                    <b>${item.descricao || item.nome || 'Produto'}</b>
                    <span>${_fmtBRL(sub)}</span>
                </div>
                <div class="prop-resumo-row" style="font-size:.72rem;margin-top:-3px;margin-bottom:3px;">
                    <span>${item.quantidade || 1} un × ${_fmtBRL(item.preco || 0)} &nbsp;·&nbsp; <span style="color:var(--text-secondary)">${item.codigo || ''}</span></span>
                </div>`;
            });
            html += `<div class="prop-resumo-row prop-total"><span>Total</span><span>${_fmtBRL(total)}</span></div>`;
            document.getElementById('propResumoCarrinho').innerHTML = html;

            // Exibe modal
            document.getElementById('modalPropostaPDF').classList.add('aberto');
            document.body.style.overflow = 'hidden';
            setTimeout(() => document.getElementById('prop_razaoSocial').focus(), 120);
        }

        function fecharModalProposta() {
            document.getElementById('modalPropostaPDF').classList.remove('aberto');
            document.body.style.overflow = '';
        }

        document.getElementById('modalPropostaPDF').addEventListener('click', function(e) {
            if (e.target === this) fecharModalProposta();
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.getElementById('modalPropostaPDF').classList.contains('aberto'))
                fecharModalProposta();
        });

        function gerarPropostaPDF() {
            const razaoSocial = document.getElementById('prop_razaoSocial').value.trim();
            if (!razaoSocial) {
                const el = document.getElementById('prop_razaoSocial');
                el.style.borderColor = '#dc2626';
                el.focus();
                setTimeout(() => el.style.borderColor = '', 2200);
                return;
            }
            const btn = document.getElementById('propBtnGerar');
            const txt = document.getElementById('propBtnTxt');
            btn.classList.add('carregando');
            txt.textContent = '⏳ Gerando...';
            setTimeout(() => {
                try { _montarPDF(); }
                catch(err) {
                    console.error(err);
                    alert('❌ Erro ao gerar PDF:\n' + err.message);
                } finally {
                    btn.classList.remove('carregando');
                    txt.textContent = '⬇ Baixar PDF';
                }
            }, 80);
        }

        function _montarPDF() {
            // Lê campos
            const numero    = document.getElementById('prop_numero').value;
            const razao     = document.getElementById('prop_razaoSocial').value.trim();
            const cnpj      = document.getElementById('prop_cnpj').value.trim();
            const contato   = document.getElementById('prop_contato').value.trim();
            const email     = document.getElementById('prop_email').value.trim();
            const telefone  = document.getElementById('prop_telefone').value.trim();
            const condicao  = document.getElementById('prop_condicao').value.trim();
            const custoFin  = document.getElementById('prop_custoFin').value.trim();
            const validRaw  = document.getElementById('prop_validade').value;
            const obs       = document.getElementById('prop_obs').value.trim();
            const reprNome  = document.getElementById('prop_reprNome').value.trim();
            const reprCargo = document.getElementById('prop_reprCargo').value.trim();
            const reprEmail = document.getElementById('prop_reprEmail').value.trim();
            const reprTel   = document.getElementById('prop_reprTel').value.trim();

            const validade    = validRaw ? new Date(validRaw + 'T00:00:00').toLocaleDateString('pt-BR') : '—';
            const emissao     = new Date().toLocaleDateString('pt-BR');

            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
            const W = doc.internal.pageSize.getWidth();
            const H = doc.internal.pageSize.getHeight();
            const mg = 14;

            // Paleta
            const NAVY  = [10, 37, 64];
            const TEAL  = [14, 110, 110];
            const BLANC = [255, 255, 255];
            const GRAY  = [107, 114, 128];
            const BGLT  = [249, 250, 251];
            const BORD  = [229, 231, 235];
            const DARK  = [17, 24, 39];

            let y = 0;

            // ── HEADER ──────────────────────────────────────────────
            doc.setFillColor(...NAVY);
            doc.rect(0, 0, W, 38, 'F');
            doc.setFillColor(...TEAL);
            doc.setGState(doc.GState({ opacity: 0.3 }));
            doc.rect(W * 0.6, 0, W * 0.4, 38, 'F');
            doc.setGState(doc.GState({ opacity: 1 }));
            doc.setFillColor(...TEAL);
            doc.rect(0, 38, W, 2.5, 'F');

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(20);
            doc.setTextColor(...BLANC);
            doc.text('HACO RFID', mg, 17);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            doc.setTextColor(175, 220, 220);
            doc.text('Etiquetas Inteligentes · RFID Solutions', mg, 24);

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(9);
            doc.setTextColor(...BLANC);
            doc.text(numero, W - mg, 16, { align: 'right' });
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(7.5);
            doc.setTextColor(175, 220, 220);
            doc.text('PROPOSTA COMERCIAL', W - mg, 22, { align: 'right' });
            doc.text('Emissão: ' + emissao, W - mg, 28, { align: 'right' });
            doc.text('Válida até: ' + validade, W - mg, 34, { align: 'right' });

            y = 46;

            // ── CLIENTE ─────────────────────────────────────────────
            doc.setFillColor(...BGLT);
            doc.setDrawColor(...BORD);
            doc.setLineWidth(0.3);
            doc.roundedRect(mg, y, W - mg * 2, 36, 3, 3, 'FD');
            doc.setFillColor(...TEAL);
            doc.roundedRect(mg, y, 3, 36, 1.5, 1.5, 'F');
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(6.8);
            doc.setTextColor(...TEAL);
            doc.text('DADOS DO CLIENTE', mg + 6, y + 7);

            const cx1 = mg + 6, cx2 = W / 2 + 4;
            function campoC(lbl, val, x, yy) {
                doc.setFont('helvetica', 'bold'); doc.setFontSize(6.2); doc.setTextColor(...GRAY);
                doc.text(lbl, x, yy);
                doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...DARK);
                doc.text(val || '—', x, yy + 4.5);
            }
            campoC('RAZÃO SOCIAL / NOME', razao, cx1, y + 14);
            campoC('CNPJ', cnpj || '—', cx2, y + 14);
            campoC('CONTATO', contato || '—', cx1, y + 25);
            campoC('E-MAIL', email || '—', cx2, y + 25);

            // Telefone abaixo se tiver espaço
            if (telefone) {
                y += 36 + 2;
                doc.setFillColor(...BGLT);
                doc.setDrawColor(...BORD);
                doc.roundedRect(mg, y, W - mg * 2, 12, 2, 2, 'FD');
                campoC('TELEFONE / WHATSAPP', telefone, mg + 6, y + 8.5);
                y += 12;
            } else {
                y += 36;
            }

            // ── CONDIÇÃO FINANCEIRA ──────────────────────────────────
            y += 5;
            doc.setFillColor(236, 253, 252);
            doc.setDrawColor(...TEAL);
            doc.setLineWidth(0.4);
            doc.roundedRect(mg, y, W - mg * 2, 18, 3, 3, 'FD');
            doc.setFont('helvetica', 'bold'); doc.setFontSize(6.8); doc.setTextColor(...TEAL);
            doc.text('CONDIÇÃO DE PAGAMENTO', mg + 5, y + 7);
            doc.setFont('helvetica', 'bold'); doc.setFontSize(9.5); doc.setTextColor(...NAVY);
            doc.text(condicao || '—', mg + 5, y + 14);
            if (custoFin) {
                doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...GRAY);
                doc.text('Custo Financeiro: ' + custoFin, W - mg - 4, y + 14, { align: 'right' });
            }
            y += 24;

            // ── TABELA DE PRODUTOS ───────────────────────────────────
            doc.setFont('helvetica', 'bold'); doc.setFontSize(6.8); doc.setTextColor(...TEAL);
            doc.text('PRODUTOS / ITENS DA PROPOSTA', mg, y);
            y += 3;

            let total = 0;
            const linhas = carrinhoConsulta.map((item, i) => {
                const sub = (item.preco || 0) * (item.quantidade || 1);
                total += sub;
                return [
                    i + 1,
                    item.codigo || '—',
                    item.descricao || item.nome || 'Produto',
                    (item.quantidade || 1) + ' un',
                    _fmtBRL(item.preco || 0),
                    _fmtBRL(sub)
                ];
            });

            doc.autoTable({
                startY: y,
                head: [['#', 'Código', 'Descrição', 'Qtd', 'Preço Unit.', 'Subtotal']],
                body: linhas,
                margin: { left: mg, right: mg },
                styles: { font: 'helvetica', fontSize: 8, cellPadding: 3.5, textColor: DARK, lineColor: BORD, lineWidth: 0.25 },
                headStyles: { fillColor: NAVY, textColor: BLANC, fontStyle: 'bold', fontSize: 7.5 },
                alternateRowStyles: { fillColor: BGLT },
                columnStyles: {
                    0: { cellWidth: 8, halign: 'center' },
                    1: { cellWidth: 25, halign: 'left' },
                    2: { cellWidth: 'auto' },
                    3: { cellWidth: 20, halign: 'center' },
                    4: { cellWidth: 30, halign: 'right' },
                    5: { cellWidth: 30, halign: 'right', fontStyle: 'bold' }
                },
                didDrawPage: () => _rodapePDF(doc, W, H, mg, NAVY, GRAY, numero, emissao)
            });

            y = doc.lastAutoTable.finalY + 4;

            // ── TOTAL ─────────────────────────────────────────────────
            doc.setFillColor(...NAVY);
            doc.rect(mg, y, W - mg * 2, 11, 'F');
            doc.setFont('helvetica', 'bold'); doc.setFontSize(9.5); doc.setTextColor(...BLANC);
            doc.text('TOTAL DA PROPOSTA', mg + 5, y + 7.5);
            doc.text(_fmtBRL(total), W - mg - 4, y + 7.5, { align: 'right' });
            y += 17;

            // ── OBSERVAÇÕES ───────────────────────────────────────────
            if (obs) {
                const linhasObs = doc.splitTextToSize(obs, W - mg * 2 - 10);
                const altObs = linhasObs.length * 4.5 + 14;
                if (y + altObs > H - 65) { doc.addPage(); _cabPDF(doc, W, mg, NAVY, TEAL, BLANC, numero); y = 28; }
                doc.setFillColor(255, 251, 235);
                doc.setDrawColor(251, 191, 36); doc.setLineWidth(0.3);
                doc.roundedRect(mg, y, W - mg * 2, altObs, 3, 3, 'FD');
                doc.setFont('helvetica', 'bold'); doc.setFontSize(6.8); doc.setTextColor(146, 64, 14);
                doc.text('OBSERVAÇÕES', mg + 5, y + 7);
                doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...DARK);
                doc.text(linhasObs, mg + 5, y + 12);
                y += altObs + 8;
            }

            // ── ASSINATURA ────────────────────────────────────────────
            const altAss = 48;
            if (y + altAss > H - 28) { doc.addPage(); _cabPDF(doc, W, mg, NAVY, TEAL, BLANC, numero); y = 28; }
            y += 4;
            const colW = (W - mg * 2 - 14) / 2;
            const xA = mg, xB = mg + colW + 14;

            [xA, xB].forEach((x, idx) => {
                doc.setFillColor(...BGLT); doc.setDrawColor(...BORD); doc.setLineWidth(0.3);
                doc.roundedRect(x, y, colW, altAss, 2, 2, 'FD');
                doc.setFont('helvetica', 'bold'); doc.setFontSize(6.8); doc.setTextColor(...TEAL);
                const titulo = idx === 0 ? 'ACEITE DO CLIENTE' : 'REPRESENTANTE COMERCIAL';
                doc.text(titulo, x + colW / 2, y + 8, { align: 'center' });
                doc.setDrawColor(190, 190, 200); doc.setLineWidth(0.5);
                doc.line(x + 8, y + 31, x + colW - 8, y + 31);
                doc.setFont('helvetica', idx === 0 ? 'normal' : 'bold'); doc.setFontSize(7.5); doc.setTextColor(...DARK);
                doc.text(idx === 0 ? razao : (reprNome || 'HACO RFID'), x + colW / 2, y + 37, { align: 'center' });
                if (idx === 0) {
                    doc.setFont('helvetica', 'normal'); doc.setFontSize(6.5); doc.setTextColor(...GRAY);
                    doc.text('Data: _____/_____/_______', x + colW / 2, y + 43, { align: 'center' });
                } else if (reprCargo) {
                    doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(...GRAY);
                    doc.text(reprCargo, x + colW / 2, y + 43, { align: 'center' });
                }
            });
            y += altAss + 6;

            if (reprEmail || reprTel) {
                doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(...GRAY);
                doc.text([reprEmail, reprTel].filter(Boolean).join('   ·   '), W / 2, y, { align: 'center' });
            }

            // ── RODAPÉ FINAL ──────────────────────────────────────────
            _rodapePDF(doc, W, H, mg, NAVY, GRAY, numero, emissao);

            // ── SALVAR ────────────────────────────────────────────────
            const fname = `Proposta_HACO_${numero}_${razao.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
            doc.save(fname);

            // Salva histórico
            try {
                const hist = JSON.parse(localStorage.getItem('haco_historico_propostas') || '[]');
                hist.unshift({ numero, razao, cnpj, contato, condicao, total: _fmtBRL(total), emissao, validade, ts: Date.now() });
                if (hist.length > 100) hist.pop();
                localStorage.setItem('haco_historico_propostas', JSON.stringify(hist));
            } catch(e) {}

            setTimeout(fecharModalProposta, 400);
        }

        function _rodapePDF(doc, W, H, mg, NAVY, GRAY, numero, emissao) {
            doc.setFillColor(...NAVY);
            doc.rect(0, H - 12, W, 12, 'F');
            doc.setFont('helvetica', 'normal'); doc.setFontSize(6.5); doc.setTextColor(180, 200, 220);
            doc.text('HACO RFID · haco.com.br', mg, H - 4.5);
            doc.text(numero + ' · ' + emissao, W / 2, H - 4.5, { align: 'center' });
            doc.text('Pág. ' + doc.internal.getCurrentPageInfo().pageNumber, W - mg, H - 4.5, { align: 'right' });
        }

        function _cabPDF(doc, W, mg, NAVY, TEAL, BLANC, numero) {
            doc.setFillColor(...NAVY); doc.rect(0, 0, W, 18, 'F');
            doc.setFillColor(...TEAL); doc.rect(0, 18, W, 1.5, 'F');
            doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(...BLANC);
            doc.text('HACO RFID', mg, 13);
            doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(175, 220, 220);
            doc.text(numero + ' — continuação', W - mg, 13, { align: 'right' });
        }

        // ================================================================
        // IMPORTAÇÃO DE PLANILHA DE FATURAMENTO
        // ================================================================

        let importDadosProcessados = [];

        function abrirModalImportarPlanilha() {
            document.getElementById('modalImportarPlanilha').classList.add('active');
            resetarImportModal();
        }

        function fecharModalImportarPlanilha() {
            document.getElementById('modalImportarPlanilha').classList.remove('active');
            resetarImportModal();
        }

        function resetarImportModal() {
            importDadosProcessados = [];
            document.getElementById('inputPlanilha').value = '';
            document.getElementById('importPreviewContainer').style.display = 'none';
            document.getElementById('importResultado').style.display = 'none';
            document.getElementById('importArquivoStatus').style.display = 'none';
            const btn = document.getElementById('btnConfirmarImport');
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
            const drop = document.getElementById('importDropArea');
            drop.style.borderColor = 'var(--border)';
            drop.style.background = '';
        }

        function importDragOver(e) {
            e.preventDefault();
            e.stopPropagation();
            const drop = document.getElementById('importDropArea');
            drop.style.borderColor = '#0e6e6e';
            drop.style.background = 'rgba(14,110,110,0.05)';
        }

        function importDragLeave(e) {
            const drop = document.getElementById('importDropArea');
            drop.style.borderColor = 'var(--border)';
            drop.style.background = '';
        }

        function importDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            importDragLeave(e);
            const file = e.dataTransfer.files[0];
            if (file) processarArquivoPlanilha(file);
        }

        function normalizarNomeColuna(nome) {
            return (nome || '').toString().toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9]/g, '');
        }

        function encontrarColuna(keys, candidatos) {
            const normKeys = keys.map(k => ({ orig: k, norm: normalizarNomeColuna(k) }));
            for (const c of candidatos) {
                const nc = normalizarNomeColuna(c);
                const found = normKeys.find(k => k.norm === nc || k.norm.includes(nc) || nc.includes(k.norm));
                if (found) return found.orig;
            }
            return null;
        }

        function processarArquivoPlanilha(file) {
            if (!file) return;
            if (typeof XLSX === 'undefined') {
                alert('Biblioteca SheetJS não carregada. Verifique sua conexão com a internet.');
                return;
            }

            const statusDiv = document.getElementById('importArquivoStatus');
            statusDiv.style.display = 'flex';
            document.getElementById('importArquivoNome').textContent = '📄 ' + file.name;
            document.getElementById('importArquivoLinhas').textContent = 'Processando...';

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array', cellDates: true });
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];
                    const rows = XLSX.utils.sheet_to_json(sheet, { raw: false, defval: '' });

                    if (!rows || rows.length === 0) {
                        alert('Planilha vazia ou sem dados válidos.');
                        return;
                    }

                    const keys = Object.keys(rows[0]);
                    const colCliente  = encontrarColuna(keys, ['cliente', 'conta', 'client', 'nome', 'razaosocial', 'empresa']);
                    const colData     = encontrarColuna(keys, ['data', 'datafaturamento', 'date', 'data_faturamento']);
                    const colValor    = encontrarColuna(keys, ['valor', 'value', 'valorfaturamento', 'valor_faturamento', 'total', 'montante']);
                    const colPedido   = encontrarColuna(keys, ['pedido', 'pedidohaco', 'numeropedido', 'order', 'pedido_haco', 'haco']);

                    if (!colCliente || !colData || !colValor) {
                        alert(`Não encontrei as colunas obrigatórias.\n\nColunas encontradas: ${keys.join(', ')}\n\nA planilha deve ter colunas chamadas: Cliente, Data, Valor (e opcionalmente: Pedido Haco)`);
                        return;
                    }

                    document.getElementById('importArquivoLinhas').textContent = `${rows.length} linha(s) encontrada(s) — Aba: ${sheetName}`;

                    importDadosProcessados = rows.map((row, idx) => {
                        const nomeCliente = (row[colCliente] || '').toString().trim();
                        const dataRaw     = (row[colData] || '').toString().trim();
                        const valorRaw    = (row[colValor] || '').toString().trim().replace(/[R$\s.]/g, '').replace(',', '.');
                        const pedido      = colPedido ? (row[colPedido] || '').toString().trim() : '';

                        // Normaliza data
                        let dataISO = '';
                        if (dataRaw) {
                            // Tenta dd/mm/aaaa
                            const partsBR = dataRaw.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
                            if (partsBR) {
                                const [, d, m, a] = partsBR;
                                const ano = a.length === 2 ? '20' + a : a;
                                dataISO = `${ano}-${m.padStart(2,'0')}-${d.padStart(2,'0')}`;
                            } else if (/^\d{4}-\d{2}-\d{2}/.test(dataRaw)) {
                                dataISO = dataRaw.substring(0, 10);
                            } else {
                                // Tenta parse genérico
                                const d = new Date(dataRaw);
                                if (!isNaN(d)) dataISO = d.toISOString().substring(0, 10);
                            }
                        }

                        const valor = parseFloat(valorRaw);

                        // Validação
                        const erros = [];
                        let erp = '';

                        if (!nomeCliente) erros.push('Cliente vazio');
                        if (!dataISO) erros.push('Data inválida: ' + dataRaw);
                        if (isNaN(valor) || valor <= 0) erros.push('Valor inválido: ' + valorRaw);

                        // Verifica se cliente existe (busca case-insensitive)
                        if (nomeCliente) {
                            const clienteKey = Object.keys(app.clientes).find(
                                k => k.toLowerCase() === nomeCliente.toLowerCase()
                            );
                            if (clienteKey) {
                                erp = app.clientes[clienteKey].erp || '';
                                if (!erp) erros.push('Cliente sem código ERP');
                            } else {
                                erros.push('Cliente não cadastrado no CRM');
                            }
                        }

                        return {
                            idx,
                            nomeCliente,
                            dataISO,
                            dataRaw,
                            valor,
                            pedido: pedido || '-',
                            erp,
                            valido: erros.length === 0,
                            erros
                        };
                    });

                    renderizarPreviewImport();

                } catch (err) {
                    console.error(err);
                    alert('Erro ao processar o arquivo: ' + err.message);
                }
            };
            reader.readAsArrayBuffer(file);
        }

        function renderizarPreviewImport() {
            const validos   = importDadosProcessados.filter(r => r.valido).length;
            const invalidos = importDadosProcessados.filter(r => !r.valido).length;

            document.getElementById('importContadorValidos').textContent   = `✅ ${validos} válidos`;
            document.getElementById('importContadorInvalidos').textContent = `❌ ${invalidos} inválidos`;

            const tbody = document.getElementById('importPreviewBody');
            tbody.innerHTML = importDadosProcessados.map(row => {
                const cor = row.valido ? '' : 'background: rgba(239,68,68,0.06);';
                const badge = row.valido
                    ? `<span style="background:#dcfce7;color:#166534;padding:3px 10px;border-radius:10px;font-size:11px;font-weight:700;">✅ OK</span>`
                    : `<span style="background:#fee2e2;color:#991b1b;padding:3px 10px;border-radius:10px;font-size:11px;font-weight:700;">❌ Erro</span>`;
                const obs = row.erros.length ? row.erros.join('; ') : row.erp ? `ERP: ${row.erp}` : '';
                const valorFmt = isNaN(row.valor) ? row.valor : row.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                return `<tr style="${cor}">
                    <td style="padding:8px 12px;border-bottom:1px solid var(--border);">${badge}</td>
                    <td style="padding:8px 12px;border-bottom:1px solid var(--border);font-weight:600;">${row.nomeCliente || '<em style="color:#9ca3af">vazio</em>'}</td>
                    <td style="padding:8px 12px;border-bottom:1px solid var(--border);">${row.dataISO || row.dataRaw}</td>
                    <td style="padding:8px 12px;border-bottom:1px solid var(--border);color:var(--text-secondary);">${row.pedido}</td>
                    <td style="padding:8px 12px;border-bottom:1px solid var(--border);text-align:right;font-weight:600;">R$ ${valorFmt}</td>
                    <td style="padding:8px 12px;border-bottom:1px solid var(--border);font-size:12px;color:${row.valido ? '#166534' : '#991b1b'};">${obs}</td>
                </tr>`;
            }).join('');

            document.getElementById('importPreviewContainer').style.display = 'block';
            document.getElementById('importResultado').style.display = 'none';

            const btn = document.getElementById('btnConfirmarImport');
            if (validos > 0) {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
                btn.textContent = `✅ Importar ${validos} faturamento(s)`;
            } else {
                btn.disabled = true;
                btn.style.opacity = '0.5';
                btn.style.cursor = 'not-allowed';
                btn.textContent = '✅ Confirmar Importação';
            }
        }

        // ================================================================
        // GOOGLE SHEETS SYNC FUNCTIONS
        // ================================================================
        
        function extrairSpreadsheetId(valor) {
            if (!valor) return '';
            // Se for uma URL completa, extrai o ID entre /d/ e /edit
            const match = valor.match(/\/d\/([a-zA-Z0-9-_]+)/);
            return match ? match[1] : valor.trim();
        }

        function abrirConfigGoogleSheets() {
            document.getElementById('modalConfigGoogleSheets').classList.add('active');
            const config = JSON.parse(localStorage.getItem('haco_gsheets_config') || '{}');
            document.getElementById('gs_spreadsheet_id').value = config.spreadsheet_id || '';
            document.getElementById('gs_filter_vendedor').value = config.vendedor_filter || '';
            document.getElementById('gs_auto_sync').checked = !!config.auto_sync;
            atualizarToggleVisual(!!config.auto_sync);
            
            const sheetSelect = document.getElementById('gs_sheet_name');
            sheetSelect.innerHTML = `<option value="${config.sheet_name || 'Página1'}">${config.sheet_name || 'Página1'}</option>`;
            
            if (config.spreadsheet_id) {
                buscarColunasGoogleSheets(true);
            }
        }

        function fecharConfigGoogleSheets() {
            document.getElementById('modalConfigGoogleSheets').classList.remove('active');
        }

        async function buscarColunasGoogleSheets(isInitial = false) {
            let spreadsheet_id = extrairSpreadsheetId(document.getElementById('gs_spreadsheet_id').value);
            let sheet_name = document.getElementById('gs_sheet_name').value;
            
            if (!spreadsheet_id) {
                if (!isInitial) alert('⚠️ Insira o ID ou a URL da planilha primeiro.');
                return;
            }

            // Atualiza o campo com o ID limpo
            document.getElementById('gs_spreadsheet_id').value = spreadsheet_id;

            const btn = document.querySelector('#modalConfigGoogleSheets .btn-primary');
            const originalText = btn.textContent;
            btn.textContent = '⏳ Buscando dados...';
            btn.disabled = true;

            try {
                // 1. Listar abas primeiro se não for carregamento inicial
                if (!isInitial) {
                    const sheetsResp = await fetch(`/api/google-sheets/list-sheets?spreadsheet_id=${spreadsheet_id}`);
                    if (sheetsResp.ok) {
                        const sheetsData = await sheetsResp.json();
                        const sheetSelect = document.getElementById('gs_sheet_name');
                        const currentVal = sheetSelect.value;
                        sheetSelect.innerHTML = '';
                        sheetsData.sheets.forEach(s => {
                            const opt = document.createElement('option');
                            opt.value = s;
                            opt.textContent = s;
                            if (s === currentVal) opt.selected = true;
                            sheetSelect.appendChild(opt);
                        });
                        // Atualiza o nome da aba para a selecionada ou a primeira da lista
                        sheet_name = sheetSelect.value;
                    }
                }

                // 2. Buscar cabeçalhos
                const response = await fetch(`/api/google-sheets/headers?spreadsheet_id=${spreadsheet_id}&sheet_name=${sheet_name}`);
                const data = await response.json();
                
                if (!response.ok) {
                    throw new Error(data.detail || 'Não foi possível carregar a planilha.');
                }
                
                const headers = data.headers;
                
                if (!headers || headers.length === 0) throw new Error('Planilha vazia ou sem cabeçalhos na primeira linha.');

                // Preencher os Selects de Mapeamento
                const fields = ['cliente', 'data', 'valor', 'pedido', 'erp', 'vendedor', 'nota', 'etiqueta', 'status_ped', 'entrega'];
                const config = JSON.parse(localStorage.getItem('haco_gsheets_config') || '{}');
                const mapping = config.mapping || {};

                fields.forEach(f => {
                    const select = document.getElementById(`gs_map_${f}`);
                    if (!select) return;
                    select.innerHTML = '<option value="">-- Selecione uma coluna --</option>';
                    headers.forEach(h => {
                        const option = document.createElement('option');
                        option.value = h;
                        option.textContent = h;
                        
                        // Lógica de mapeamento
                        const labelMap = {
                            'cliente': 'Cliente', 'data': 'Data', 'valor': 'Valor', 'pedido': 'Pedido Haco', 'erp': 'Código ERP',
                            'vendedor': 'Vendedor', 'nota': 'Nota Fiscal', 'etiqueta': 'Código Etiqueta', 'status_ped': 'Status Pedido', 'entrega': 'Data Entrega'
                        };
                        const mappingKey = labelMap[f];
                        
                        if (mapping[mappingKey] === h) {
                            option.selected = true;
                        } else if (!mapping[mappingKey] && h) {
                            // Tenta auto-mapear se o nome for parecido
                            const lowerH = h.toString().toLowerCase();
                            if (f === 'cliente' && (lowerH.includes('cliente') || lowerH.includes('nome'))) option.selected = true;
                            if (f === 'data' && (lowerH.includes('data') || lowerH.includes('ajustada'))) option.selected = true;
                            if (f === 'valor' && (lowerH.includes('valor') || lowerH.includes('total'))) option.selected = true;
                            if (f === 'pedido' && (lowerH.includes('pedido') || lowerH.includes('item'))) option.selected = true;
                            if (f === 'erp' && (lowerH.includes('erp') || lowerH.includes('código') || lowerH.includes('cd '))) option.selected = true;
                            if (f === 'vendedor' && (lowerH.includes('vendedor') || lowerH.includes('vend'))) option.selected = true;
                            if (f === 'nota' && (lowerH.includes('nota') || lowerH.includes('nf'))) option.selected = true;
                            if (f === 'etiqueta' && (lowerH.includes('etiqueta') || lowerH.includes('tag'))) option.selected = true;
                            if (f === 'status_ped' && (lowerH.includes('status'))) option.selected = true;
                            if (f === 'entrega' && (lowerH.includes('entrega') || lowerH.includes('entre'))) option.selected = true;
                        }
                        select.appendChild(option);
                    });
                });

                document.getElementById('gs_mapping_container').style.display = 'block';
                if (!isInitial) alert('✅ Colunas detectadas com sucesso!');

            } catch (err) {
                alert('❌ Erro: ' + err.message);
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        }

        function salvarConfigGoogleSheets() {
            const spreadsheet_id = extrairSpreadsheetId(document.getElementById('gs_spreadsheet_id').value);
            const sheet_name = document.getElementById('gs_sheet_name').value.trim();
            
            // Atualiza o campo com o ID limpo
            document.getElementById('gs_spreadsheet_id').value = spreadsheet_id;
            
            const mapping = {
                'Cliente': document.getElementById('gs_map_cliente').value,
                'Data': document.getElementById('gs_map_data').value,
                'Valor': document.getElementById('gs_map_valor').value,
                'Pedido Haco': document.getElementById('gs_map_pedido').value,
                'Código ERP': document.getElementById('gs_map_erp').value,
                'Vendedor': document.getElementById('gs_map_vendedor').value,
                'Nota Fiscal': document.getElementById('gs_map_nota').value,
                'Código Etiqueta': document.getElementById('gs_map_etiqueta').value,
                'Status Pedido': document.getElementById('gs_map_status_ped').value,
                'Data Entrega': document.getElementById('gs_map_entrega').value
            };

            const vendedor_filter = document.getElementById('gs_filter_vendedor').value.trim();
            const auto_sync = document.getElementById('gs_auto_sync').checked;

            if (!spreadsheet_id || !mapping['Cliente'] || !mapping['Data'] || !mapping['Valor']) {
                alert('⚠️ Preencha o ID da planilha e mapeie pelo menos Cliente, Data e Valor.');
                return;
            }

            const config = { spreadsheet_id, sheet_name, mapping, vendedor_filter, auto_sync };
            localStorage.setItem('haco_gsheets_config', JSON.stringify(config));
            
            if (auto_sync) iniciarAutoSyncLoop();
            else pararAutoSyncLoop();
            
            alert('✅ Configuração do Google Sheets salva com sucesso!');
            fecharConfigGoogleSheets();
        }

        function atualizarToggleVisual(checked) {
            const slider = document.getElementById('gs_auto_sync_slider');
            const statusTexto = document.getElementById('statusAutoSyncTempo');
            if (slider) {
                slider.style.backgroundColor = checked ? '#10b981' : '#ccc';
            }
            if (statusTexto) {
                statusTexto.style.display = checked ? 'block' : 'none';
            }
        }

        function toggleAutoSync(checked) {
            atualizarToggleVisual(checked);
        }

        let autoSyncInterval = null;

        function iniciarAutoSyncLoop() {
            pararAutoSyncLoop();
            const config = JSON.parse(localStorage.getItem('haco_gsheets_config') || '{}');
            if (!config.spreadsheet_id || !config.auto_sync) return;
            
            const INTERVALO_MS = 5 * 60 * 1000; // 5 minutos
            autoSyncInterval = setInterval(() => {
                sincronizarGoogleSheets(true);
            }, INTERVALO_MS);
            console.log('✅ Auto-sync (Polling) ativado para cada 5 minutos.');
        }

        function pararAutoSyncLoop() {
            if (autoSyncInterval) {
                clearInterval(autoSyncInterval);
                autoSyncInterval = null;
                console.log('⏹️ Auto-sync (Polling) desativado.');
            }
        }

        function mostrarNotificacaoAutoSync(mensagem) {
            const notif = document.createElement('div');
            notif.innerHTML = `🔄 ${mensagem}`;
            notif.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #10b981;
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                z-index: 9999;
                font-weight: 600;
                font-size: 14px;
                transition: transform 0.3s ease, opacity 0.3s ease;
                transform: translateX(400px);
                opacity: 0;
            `;
            document.body.appendChild(notif);
            
            // Anim In
            setTimeout(() => {
                notif.style.transform = 'translateX(0)';
                notif.style.opacity = '1';
            }, 10);
            
            // Anim Out
            setTimeout(() => {
                notif.style.transform = 'translateX(400px)';
                notif.style.opacity = '0';
                setTimeout(() => notif.remove(), 350);
            }, 5000);
        }

        // Inicia o auto-sync ao dar load na página se estiver salvo como ativo:
        window.addEventListener('DOMContentLoaded', () => {
            const config = JSON.parse(localStorage.getItem('haco_gsheets_config') || '{}');
            if (config.auto_sync) {
                iniciarAutoSyncLoop();
            }
        });

        function extrairAno(dataString) {
            if (!dataString) return 0;
            const s = String(dataString).trim();
            // YYYY-MM-DD
            if (s.includes('-')) {
                const partes = s.split('-');
                if (partes[0].length === 4) return parseInt(partes[0], 10);
            }
            // DD/MM/YYYY ou DD/MM/YY
            if (s.includes('/')) {
                const partes = s.split('/');
                if (partes.length === 3) {
                    let anoStr = partes[2].trim().split(' ')[0]; // caso tenha hora
                    if (anoStr.length === 2) anoStr = '20' + anoStr;
                    return parseInt(anoStr, 10);
                }
            }
            return 0;
        }

        async function sincronizarGoogleSheets(isAutoSync = false) {
            const config = JSON.parse(localStorage.getItem('haco_gsheets_config') || '{}');
            if (!config.spreadsheet_id || !config.mapping) {
                if (!isAutoSync) {
                    alert('⚠️ Google Sheets não configurado. Clique em "Configurar Planilha" primeiro.');
                    abrirConfigGoogleSheets();
                }
                return;
            }

            const btn = document.querySelector('button[onclick="sincronizarGoogleSheets()"]');
            const originalText = btn ? btn.innerHTML : 'Sincronizar Lotes';
            
            if (!isAutoSync && btn) btn.disabled = true;

            const ANO_FILTRO = 2026;

            try {
                let skip = 2; // Começa na linha 2 (ignorando header naturo)
                const limit = 500;
                let hasMore = true;
                
                let totalNovos = 0;
                let totalIgnorados = 0;
                let clientesCriados = 0;
                
                // Backup do estado local (RAM) antes de alterar
                const snapshotFaturamentos = JSON.stringify(app.faturamentos);
                const snapshotClientes = JSON.stringify(app.clientes);

                while (hasMore) {
                    if (!isAutoSync && btn) btn.innerHTML = `⏳ Importando linhas ${skip} a ${skip + limit - 1}...`;
                    
                    const payload = { ...config, skip, limit };

                    const response = await fetch('/api/google-sheets/sync', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (!response.ok) throw new Error(`Falha na API (status: ${response.status})`);
                    
                    const result = await response.json();
                    
                    if (!result.data || result.data.length === 0) {
                        hasMore = false;
                        break;
                    }
                    
                    result.data.forEach(item => {
                        // Filtro Trito de Ano (2026)
                        const rawData = item.data || item.Data || '';
                        const anoData = extrairAno(rawData);
                        if (anoData && anoData !== ANO_FILTRO) {
                            return; // skip igual 'continue' no foreach
                        }

                        // python retorna 'pedido' para 'Pedido Haco'
                        const pedidoHacoItem = item.pedido || '-';
                        const jaExiste = pedidoHacoItem !== '-' && app.faturamentos.some(f => f.pedidoHaco === pedidoHacoItem);
                        
                        if (!jaExiste) {
                            // Python retorna 'nomeCliente' para 'Cliente'
                            const nomeOriginal = item.nomeCliente || 'Desconhecido';
                            
                            let clienteKey = Object.keys(app.clientes).find(
                                k => nomeOriginal.toString().toLowerCase() === k.toLowerCase()
                            );
                            
                            if (!clienteKey) {
                                // Auto-cadastro: cliente novo detectado
                                clienteKey = nomeOriginal;
                                app.clientes[clienteKey] = {
                                    erp: item.erp || '',
                                    cidade: 'Importado',
                                    estado: 'A definir',
                                    recorrencia: '',
                                    pre_cadastro: true
                                };
                                clientesCriados++;
                            }

                            app.faturamentos.push({
                                cliente: clienteKey,
                                erp: item.erp || app.clientes[clienteKey]?.erp || '',
                                valor: parseFloat(item.valor || 0),
                                data: item.data || '',
                                pedidoHaco: pedidoHacoItem,
                                vendedor: item.vendedor || '-',
                                notaFiscal: item.notaFiscal || '-',
                                codigoEtiqueta: item.codigoEtiqueta || '-',
                                statusPedido: item.statusPedido || '-',
                                dataEntrega: item.dataEntrega || '-'
                            });
                            totalNovos++;
                        } else {
                            totalIgnorados++;
                        }
                    });
                    
                    // Condição de parada: se vieram menos itens que o limite
                    if (result.data.length < limit) {
                        hasMore = false;
                    } else {
                        skip += limit;
                    }
                }

                if (totalNovos > 0 || clientesCriados > 0) {
                    if (!isAutoSync && btn) btn.innerHTML = `⏳ Salvando na Nuvem...`;
                    try {
                        await salvar(); // Apenas 1 request para o Neon (Opção A)
                        atualizarDashboard();
                        preencherClientesFaturamento();
                        preencherClientesAgendamento();
                        atualizarTabelaClientes();
                        
                        if (isAutoSync) {
                            mostrarNotificacaoAutoSync(`${totalNovos} novos faturamentos importados`);
                        } else {
                            alert(`✅ Sincronização concluída!\n\n${totalNovos} faturamentos importados.\n${clientesCriados} clientes pré-cadastrados.\n${totalIgnorados} ignorados.`);
                        }
                    } catch (errSave) {
                        // Rollback em memória
                        app.faturamentos = JSON.parse(snapshotFaturamentos);
                        app.clientes = JSON.parse(snapshotClientes);
                        
                        if (isAutoSync) console.error('Erro ao persistir no Auto-sync:', errSave.message);
                        else throw new Error('Erro ao persistir. ' + errSave.message);
                    }
                } else {
                    if (!isAutoSync) alert('ℹ️ Nenhuns dados novos encontrados na planilha.');
                }

            } catch (err) {
                if (isAutoSync) console.error('Erro no Auto-Sync:', err.message);
                else alert('❌ Erro na sincronização: ' + err.message);
            } finally {
                if (!isAutoSync && btn) {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }
            }
        }
        function confirmarImportacao() {
            const validos = importDadosProcessados.filter(r => r.valido);
            if (validos.length === 0) return;

            let inseridos = 0;
            validos.forEach(row => {
                // Captura o nome exato do cliente (preserva case do CRM)
                const clienteKey = Object.keys(app.clientes).find(
                    k => (row.nomeCliente || '').toString().toLowerCase() === k.toLowerCase()
                ) || row.nomeCliente;

                app.faturamentos.push({
                    cliente: clienteKey,
                    erp: row.erp,
                    valor: row.valor,
                    data: row.dataISO,
                    pedidoHaco: row.pedido || '-'
                });
                inseridos++;
            });

            salvar();
            atualizarDashboard();

            const invalidos = importDadosProcessados.filter(r => !r.valido).length;
            const resDiv = document.getElementById('importResultado');
            resDiv.style.display = 'block';
            resDiv.style.background = '#f0fdf4';
            resDiv.style.border = '1px solid #86efac';
            resDiv.style.color = '#166534';
            resDiv.innerHTML = `
                <div style="font-size: 18px; font-weight: 700; margin-bottom: 6px;">🎉 Importação concluída!</div>
                <div>✅ <b>${inseridos}</b> faturamento(s) inserido(s) com sucesso.</div>
                ${invalidos > 0 ? `<div style="margin-top: 4px; color: #991b1b;">❌ <b>${invalidos}</b> linha(s) ignorada(s) por erros.</div>` : ''}
                <div style="margin-top: 10px; font-size: 12px; color: var(--text-secondary);">Os dados já foram salvos. Feche este modal para ver no Dashboard.</div>`;

            const btn = document.getElementById('btnConfirmarImport');
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
            btn.textContent = '✅ Importação realizada';
        }

    