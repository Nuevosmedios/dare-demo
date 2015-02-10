var areas_data = {
	areas:[{
		area:{
			name:"Ciencias Naturales",
			id:"1"

		}
	},{
		area:{
			name :"Matematicas",
			id: "2"
		}
	},{
		area:{
			name :"Sociales y Ciudadanas",
			id: "3"
		}
	},{
		area:{
			name :"Lectura Crítica",
			id: "4"
		}
	},{
		area:{
			name :"Inglés",
			id: "5"
		}
	},{
		area:{
			name :"Asignaturas Adicionales",
			id: "6"
		}
	}
	]	
};

var asignatures_data = {
	asignatures:[{
		asignature : {
			name : "Biología",
			id: "1",
			area_id : "1"
		}
	},{
		asignature : {
			name : "Ciencia Tecnología y Sociedad",
			id: "2",
			area_id : "1"
		}
	},{
		asignature : {
			name : "Física",
			id: "3",
			area_id : "1"
		}
	},{
		asignature : {
			name : "Química",
			id: "4",
			area_id : "1"
		}
	},{
		asignature : {
			name : "Matemática",
			id: "5",
			area_id : "2"
		}
	},{
		asignature : {
			name : "Razonamiento Cuantitativo",
			id: "6",
			area_id : "2"
		}
	},{
		asignature : {
			name : "Ciencias Sociales",
			id: "7",
			area_id : "3"
		}
	},{
		asignature : {
			name : "Filosofía",
			id: "8",
			area_id : "4"
		}
	},{
		asignature : {
			name : "Lenguaje",
			id: "9",
			area_id : "4"
		}
	},{
		asignature : {
			name : "Inglés",
			id: "10",
			area_id : "5"
		}
	},{
		asignature : {
			name : "Francés",
			id: "11",
			area_id : "6"
		}
	},{
		asignature : {
			name : "Religión",
			id: "12",
			area_id : "6"
		}
	}]
};

var components_data = {
	components:[{
		component : {
			name : "CELULAR",
			id: "1",
			asignature_id : "1",
			topics : [{
				topic : {
					name : "CÉLULAS INMUNITARIAS",
					id : "1"
				}
			},{
				topic : {
					name : "DIVISIÓN CELULAR",
					id : "2"
				}	
			},{
				topic : {
					name : "ESTRUCTURA CELULAR",
					id : "3"
				}	
			},{
				topic : {
					name : "FUNCIÓN DE ORGANELOS CITOPLASMÁTICOS",
					id : "4"
				}	
			}]
		}
	},{
		component : {
			name : "ECOSISTÉMICO",
			id: "2",
			asignature_id : "1",
			topics : [{
				topic : {
					name : "DINÁMICA DE ECOSISTEMAS",
					id : "5"
				}
			},{
				topic : {
					name : "INTERACCIONES EN UN ECOSISTEMA",
					id : "6"
				}	
			},{
				topic : {
					name : "ECOLOGÍA",
					id : "7"
				}	
			}]
		}
	},{
		component : {
			name : "ORGANÍSMICO",
			id: "3",
			asignature_id : "1",
			topics : [{
				topic : {
					name : "DINÁMICA POBLACIONAL",
					id : "8"
				}
			},{
				topic : {
					name : "ENFERMEDADES RESPIRATORIAS",
					id : "9"
				}	
			},{
				topic : {
					name : "EVOLUCIÓN",
					id : "10"
				}	
			},{
				topic : {
					name : "EXCRECIÓN",
					id : "11"
				}	
			},{
				topic : {
					name : "FUNCIÓN DE LAS MITOCONDRIAS",
					id : "12"
				}	
			},{
				topic : {
					name : "GENÉTICA EVOLUTIVA",
					id : "13"
				}	
			},{
				topic : {
					name : "HORMONAS VEGETALES",
					id : "14"
				}	
			},{
				topic : {
					name : "NUTRICIÓN EN PLANTAS",
					id : "15"
				}	
			},{
				topic : {
					name : "RESPIRACIÓN CELULAR",
					id : "16"
				}	
			},{
				topic : {
					name : "RESPIRACIÓN EN PLANTAS",
					id : "17"
				}	
			},{
				topic : {
					name : "DESARROLLO EN VEGETALES",
					id : "18"
				}	
			}]

		}
	},{
		component : {
			name : "CIENCIA, TECNOLOGÍA Y SOCIEDAD",
			id: "4",
			asignature_id : "2",
			topics : [{
				topic : {
					name : "RIESGOS CON DISPOSITIVOS ELECTRÓNICOS",
					id : "19"
				}
			}]

		}
	},{
		component : {
			name : "TEMÁTICAS DEL COMPONENTE (CTS)",
			id: "5",
			asignature_id : "2",
			topics : [{
				topic : {
					name : "CONTAMINACIÓN ATMOSFÉRICA",
					id : "20"
				}
			}]
		}
	},{
		component : {
			name : "MECÁNICA",
			id: "6",
			asignature_id : "3",
			topics : [{
				topic : {
					name : "CAÍDA LIBRE",
					id : "21"
				}
			},{
				topic : {
					name : "CONSERVACIÓN DE ENERGÍA MECÁNICA",
					id : "22"
				}	
			},{
				topic : {
					name : "FUERZAS",
					id : "23"
				}	
			},{
				topic : {
					name : "LEYES DE NEWTON",
					id : "24"
				}	
			},{
				topic : {
					name : "MOVIMIENTO EN PLANOS INCLINADOS",
					id : "25"
				}	
			},{
				topic : {
					name : "MOVIMIENTO RECTILINEO UNIFORME",
					id : "26"
				}	
			},{
				topic : {
					name : "PRESION",
					id : "27"
				}	
			},{
				topic : {
					name : "PRINCIPIO DE ARQUIMEDES",
					id : "28"
				}	
			},{
				topic : {
					name : "TENSION EN LA CUERDA",
					id : "29"
				}	
			},{
				topic : {
					name : "TRABAJO Y ENERGÍA",
					id : "30"
				}	
			},{
				topic : {
					name : "DENSIDAD",
					id : "31"
				}	
			},{
				topic : {
					name : "EQUILIBRIO TRASLACIONAL",
					id : "32"
				}	
			},{
				topic : {
					name : "FUERZAS",
					id : "33"
				}	
			}]
		}
	},{
		component : {
			name : "ASPECTOS ANALÍTICOS DE SUSTANCIAS",
			id: "7",
			asignature_id : "4",
			topics : [{
				topic : {
					name : "ESTRUCTURA ATÓMICA",
					id : "34"
				}
			}]
			
		}	
	},{
		component : {
			name : "ASPECTOS FISICOQUÍMICOS DE SUSTANCIAS",
			id: "8",
			asignature_id : "4",
			topics : [{
				topic : {
					name : "CAMBIOS DE ESTADO",
					id : "35"
				}
			},{
				topic : {
					name : "ENLACE QUÍMICO",
					id : "36"
				}	
			},{
				topic : {
					name : "ESTRUCTURA ATÓMICA",
					id : "37"
				}	
			},{
				topic : {
					name : "MÉTODOS DE SEPARACIÓN",
					id : "38"
				}	
			},{
				topic : {
					name : "TRANSFERENCIA DE CALOR",
					id : "39"
				}	
			},{
				topic : {
					name : "CONFIGURACIÓN ELECTRÓNICA",
					id : "40"
				}	
			},{
				topic : {
					name : "ESTADOS DE LA MATERIA",
					id : "41"
				}	
			},{
				topic : {
					name : "MEZCLAS",
					id : "42"
				}	
			}]

		}	
	},{
		component : {
			name : "ÁLGEBRA",
			id: "9",
			asignature_id : "5",
			topics : [{
				topic : {
					name : "PROPIEDADES DE LA POTENCIACION",
					id : "43"
				}
			}]
		}	
	},{
		component : {
			name : "ÁLGEBRA Y CALCULO",
			id: "10",
			asignature_id : "5",
			topics : [{
				topic : {
					name : "CRECIMIENTOS",
					id : "44"
				}
			},{
				topic : {
					name : "DECRECIMIENTO EXPONENCIAL",
					id : "45"
				}	
			},{
				topic : {
					name : "DENSIDAD NÚMEROS REALES",
					id : "46"
				}	
			},{
				topic : {
					name : "ECUACIONES LINEALES",
					id : "47"
				}	
			},{
				topic : {
					name : "ENCONTRAR RELACIONES",
					id : "48"
				}	
			},{
				topic : {
					name : "EXPRESIONES ALGEBRAICAS",
					id : "49"
				}	
			},{
				topic : {
					name : "FUNCIÓN EXPONENCIAL",
					id : "50"
				}	
			},{
				topic : {
					name : "NOTACIÓN CIENTÍFICA",
					id : "51"
				}	
			},{
				topic : {
					name : "RECTA NUMÉRICA",
					id : "52"
				}	
			},{
				topic : {
					name : "SISTEMAS DE ECUACIONES",
					id : "53"
				}	
			}]

		}	
	},{
		component : {
			name : "ESTADÍSTICA",
			id: "11",
			asignature_id : "5",
			topics : [{
				topic : {
					name : "COMBINACIONES",
					id : "54"
				}
			},{
				topic : {
					name : "LECTURA DE GRÁFICAS ESTADÍSTICAS",
					id : "55"
				}	
			},{
				topic : {
					name : "PROBABILIDAD",
					id : "56"
				}	
			},{
				topic : {
					name : "VARIACIONES",
					id : "57"
				}	
			}]
		}	
	},{
		component : {
			name : "GEOMETRÍA",
			id: "12",
			asignature_id : "5",
			topics : [{
				topic : {
					name : "ÁREAS",
					id : "58"
				}
			},{
				topic : {
					name : "CONSTRUCCIONES GEOMÉTRICAS",
					id : "59"
				}	
			},{
				topic : {
					name : "DOMINIO DE SENO Y COSENO",
					id : "70"
				}	
			},{
				topic : {
					name : "LEY DE SENOS",
					id : "72"
				}	
			},{
				topic : {
					name : "PERÍMETROS",
					id : "73"
				}	
			},{
				topic : {
					name : "PITAGORAS",
					id : "74"
				}	
			},{
				topic : {
					name : "RAZONES TRIGONOMETRICAS",
					id : "75"
				}	
			},{
				topic : {
					name : "RAZONES TRIGONOMÉTRICAS",
					id : "76"
				}	
			},{
				topic : {
					name : "SEMEJANZA Y CONGRUENCIA DE TRIÁNGULOS",
					id : "77"
				}	
			},{
				topic : {
					name : "TEOREMA DE PITAGORAS",
					id : "78"
				}	
			},{
				topic : {
					name : "TEOREMA DE THALES",
					id : "79"
				}	
			},{
				topic : {
					name : "TRIANGULOS",
					id : "80"
				}	
			},{
				topic : {
					name : "VOLUMEN",
					id : "81"
				}	
			},{
				topic : {
					name : "VOLUMEN DEL CILINDRO Y LA ESFERA",
					id : "82"
				}	
			}]
		}	
	},{
		component : {
			name : "ÁLGEBRA",
			id: "13",
			asignature_id : "6",
			topics : [{
				topic : {
					name : "PORCENTAJES",
					id : "83"
				}
			}]
		}	
	},{
		component : {
			name : "ÁLGEBRA Y CALCULO",
			id: "14",
			asignature_id : "6",
			topics : [{
				topic : {
					name : "FUNCIONES",
					id : "84"
				}
			}]
		}	
	},{
		component : {
			name : "ESTADÍSTICA",
			id: "15",
			asignature_id : "6",
			topics : [{
				topic : {
					name : "DIAGRAMA DE BARRAS",
					id : "85"
				}
			},{
				topic : {
					name : "EVENTOS ALEATORIOS",
					id : "86"
				}
			},{
				topic : {
					name : "FRECUENCIA ACUMULADA",
					id : "87"
				}
			},{
				topic : {
					name : "LECTURA DE GRÁFICAS ESTADÍSTICAS",
					id : "88"
				}
			},{
				topic : {
					name : "PROBABILIDAD",
					id : "89"
				}
			},{
				topic : {
					name : "PROMEDIO",
					id : "90"
				}
			},{
				topic : {
					name : "REPRESENTACIÓN DE DATOS",
					id : "91"
				}
			},{
				topic : {
					name : "TÉCNICAS DE CONTEO",
					id : "92"
				}
			}]
		}	
	},{
		component : {
			name : "GEOMETRÍA",
			id: "16",
			asignature_id : "6",
			topics : [{
				topic : {
					name : "ÁNGULOS",
					id : "94"
				}
			}]
		}	
	},{
		component : {
			name : "EL TIEMPO Y LAS CULTURAS",
			id: "17",
			asignature_id : "7",
			topics : [{
				topic : {
					name : "CONQUISTA",
					id : "95"
				}
			},{
				topic : {
					name : "CONVIVENCIA SOCIAL",
					id : "96"
				}
			},{
				topic : {
					name : "EDAD MEDIA",
					id : "97"
				}
			},{
				topic : {
					name : "FUENTES HISTÓRICAS",
					id : "98"
				}
			},{
				topic : {
					name : "LAS CRUZADAS",
					id : "99"
				}
			},{
				topic : {
					name : "MEDIOEVO",
					id : "100"
				}
			},{
				topic : {
					name : "NAZISMO",
					id : "101"
				}
			},{
				topic : {
					name : "PERIODO NEOLÍTICO",
					id : "102"
				}
			},{
				topic : {
					name : "RENACIMIENTO",
					id : "103"
				}
			},{
				topic : {
					name : "SIGLO XX",
					id : "104"
				}
			}]
		}	
	},{
		component : {
			name : "ESPACIO, TERRITORIO, AMBIENTE Y POBLACIÓN",
			id: "18",
			asignature_id : "7",
			topics : [{
				topic : {
					name : "AGRICULTURA INDUSTRIALIZADA",
					id : "105"
				}
			},{
				topic : {
					name : "AGRICULTURA SOSTENIBLE",
					id : "106"
				}
			},{
				topic : {
					name : "CONTAMINACIÓN AMBIENTAL",
					id : "107"
				}
			},{
				topic : {
					name : "CONTAMINACIÓN VISUAL",
					id : "108"
				}
			},{
				topic : {
					name : "DESGASTE DE LOS SUELOS",
					id : "109"
				}
			},{
				topic : {
					name : "DETERIORO DE LA CAPA DE OZONO",
					id : "110"
				}
			},{
				topic : {
					name : "GEOLOGÍA",
					id : "111"
				}
			},{
				topic : {
					name : "GRUPOS INDÍGENAS EN COLOMBIA",
					id : "112"
				}
			},{
				topic : {
					name : "PLACAS TECTÓNICAS",
					id : "113"
				}
			},{
				topic : {
					name : "DETERIORO DEL MEDIO AMBIENTE",
					id : "114"
				}
			},{
				topic : {
					name : "ZONAS CLIMÁTICAS",
					id : "115"
				}
			}]
		}	
	},{
		component : {
			name : "PODER, ECONOMÍA Y ORGANIZACIONES SOCIALES",
			id: "19",
			asignature_id : "7",
			topics : [{
				topic : {
					name : "CONFLICTO INTERNO",
					id : "116"
				}
			},{
				topic : {
					name : "CONVIVENCIA CIUDADANA",
					id : "117"
				}
			},{
				topic : {
					name : "CONVIVENCIA ESCOLAR",
					id : "118"
				}
			},{
				topic : {
					name : "CORTE PENAL INTERNACIONAL",
					id : "119"
				}
			},{
				topic : {
					name : "DEMOCRACIA",
					id : "120"
				}
			},{
				topic : {
					name : "DERECHO A LA IGUALDAD",
					id : "121"
				}
			},{
				topic : {
					name : "DERECHOS DE LAS COMUNIDADES INDÍGENAS",
					id : "122"
				}
			},{
				topic : {
					name : "DERECHOS FUNDAMENTALES",
					id : "123"
				}
			},{
				topic : {
					name : "DERECHOS SOCIALES, ECONÓMICOS Y CULTURALES",
					id : "124"
				}
			},{
				topic : {
					name : "ECONOMÍA POLÍTICA",
					id : "125"
				}
			},{
				topic : {
					name : "ESTEREOTIPOS SOCIALES",
					id : "126"
				}
			},{
				topic : {
					name : "ÉTICA Y ECONOMÍA",
					id : "127"
				}
			},{
				topic : {
					name : "INFLACIÓN",
					id : "128"
				}
			},{
				topic : {
					name : "LIBERTAD DE EXPRESIÓN",
					id : "129"
				}
			},{
				topic : {
					name : "MAQUIAVELO",
					id : "130"
				}
			},{
				topic : {
					name : "ORGANIZACIONES NO GUBERNAMENTALES",
					id : "131"
				}
			},{
				topic : {
					name : "PARTICIPACIÓN POLÍTICA",
					id : "132"
				}
			},{
				topic : {
					name : "PLURALIDAD ÉTNICA Y CULTURAL",
					id : "133"
				}
			},{
				topic : {
					name : "PRODUCTO INTERNO BRUTO",
					id : "134"
				}
			},{
				topic : {
					name : "RÉGIMEN AUTOCRÁTICO",
					id : "135"
				}
			},{
				topic : {
					name : "RESOLUCIÓN DE CONFLICTOS",
					id : "136"
				}
			},{
				topic : {
					name : "TRABAJO DEL ECONOMISTA",
					id : "137"
				}
			},{
				topic : {
					name : "DICTADURAS EN AMÉRICA LATINA",
					id : "138"
				}
			}]
		}	
	},{
		component : {
			name : "SEMÁNTICO",
			id: "20",
			asignature_id : "8",
			topics : [{
				topic : {
					name : "AXIOLOGÍA",
					id : "139"
				}
			},{
				topic : {
					name : "CONOCIMIENTO CIENTÍFICO",
					id : "140"
				}
			},{
				topic : {
					name : "MARXISMO",
					id : "141"
				}
			},{
				topic : {
					name : "RACIONALISMO",
					id : "142"
				}
			},{
				topic : {
					name : "CONOCIMIENTO",
					id : "143"
				}
			},{
				topic : {
					name : "PRESOCRATICOS",
					id : "144"
				}
			}]
		}	
	},{
		component : {
			name : "SINTÁCTICO",
			id: "21",
			asignature_id : "8",
			topics : [{
				topic : {
					name : "ARISTÓTELES",
					id : "145"
				}
			},{
				topic : {
					name : "ÉTICA",
					id : "146"
				}
			}]
		}	
	},{
		component : {
			name : "PRAGMÁTICO",
			id: "22",
			asignature_id : "9",
			topics : [{
				topic : {
					name : "MACROTEXTUALIDAD",
					id : "147"
				}
			}]
		}	
	},{
		component : {
			name : "SEMÁNTICO",
			id: "23",
			asignature_id : "9",
			topics : [{
				topic : {
					name : "ANTONIMIA",
					id : "148"
				}
			},{
				topic : {
					name : "AXIOLOGÍA",
					id : "149"
				}
			},{
				topic : {
					name : "COMPONENTES DEL DISCURSO",
					id : "150"
				}
			},{
				topic : {
					name : "CONECTORES",
					id : "151"
				}
			},{
				topic : {
					name : "CONOCIMIENTO CIENTÍFICO",
					id : "152"
				}
			},{
				topic : {
					name : "ESTRUCTURA NARRATIVA",
					id : "153"
				}
			},{
				topic : {
					name : "EXISTENCIALISMO",
					id : "154"
				}
			},{
				topic : {
					name : "MACROTEXTUALIDAD",
					id : "155"
				}
			},{
				topic : {
					name : "MODERNISMO",
					id : "156"
				}
			},{
				topic : {
					name : "NARRATIVA",
					id : "157"
				}
			},{
				topic : {
					name : "ORACIÓN SIMPLE",
					id : "158"
				}
			},{
				topic : {
					name : "SIMIL",
					id : "159"
				}
			},{
				topic : {
					name : "SINONIMIA",
					id : "160"
				}
			},{
				topic : {
					name : "TIPOLOGÍA TEXTUAL",
					id : "161"
				}
			}]
		}	
	},{
		component : {
			name : "SINTÁCTICO",
			id: "24",
			asignature_id : "9",
			topics : [{
				topic : {
					name : "COMPONENTES DEL DISCURSO",
					id : "162"
				}
			},{
				topic : {
					name : "ESTRUCTURA NARRATIVA",
					id : "163"
				}
			},{
				topic : {
					name : "MACROTEXTUALIDAD",
					id : "164"
				}
			},{
				topic : {
					name : "MICROTEXTUALIDAD",
					id : "165"
				}
			}]
		}	
	},{
		component : {
			name : "ACCIÓN DE INTERPRETAR",
			id: "25",
			asignature_id : "10",
			topics : [{
				topic : {
					name : "COMPRENSIÓN DE IMÁGENES",
					id : "166"
				}
			},{
				topic : {
					name : "COMPRENSIÓN DE LETREROS",
					id : "167"
				}
			},{
				topic : {
					name : "COMPRENSIÓN DE TEXTOS",
					id : "168"
				}
			},{
				topic : {
					name : "IDENTIFICACIÓN DE DEFINICIONES",
					id : "169"
				}
			},{
				topic : {
					name : "IDENTIFICACIÓN DE VOCABULARIO",
					id : "170"
				}
			}]
		}	
	},{
		component : {
			name : "ACCIÓN DE PROPONER",
			id: "26",
			asignature_id : "10",
			topics : [{
				topic : {
					name : "COMPLETAR ESPACIOS DE UNA ORACIÓN",
					id : "171"
				}
			},{
				topic : {
					name : "COMPLETAR ESPACIOS DE UN PÁRRAFO",
					id : "172"
				}
			},{
				topic : {
					name : "SOSTENER CONVERSACIONES CORTAS",
					id : "173"
				}
			}]
		}	
	}]
};