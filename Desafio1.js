class Config {
    constructor() {
      if (Config.instance) {
        return Config.instance;
      }
  
      this.idioma = "es";
      this.tema = "oscuro";
  
      Config.instance = this;
    }
  
    setIdioma(idioma) {
      this.idioma = idioma;
    }
  
    getIdioma() {
      return this.idioma;
    }
  }
  
  // Uso
  const config1 = new Config();
  const config2 = new Config();
  
  config1.setIdioma("en");
  
  console.log(config2.getIdioma()); // "en"
  