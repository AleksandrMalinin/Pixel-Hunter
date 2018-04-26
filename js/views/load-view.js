import AbstractView from "./abstract-view";

class LoadView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>`;
  }

  bind() {
    const asterisk = this.element.querySelector(`.intro__asterisk`);

    asterisk.onclick = () => {
      this.onButtonClick();
    };
  }

  onButtonClick() {
  }
}

export default LoadView;
