export default class ElmFooter extends HTMLElement {
  constructor() {
    super();
    this.initElm()
  };

  initElm() {
    let template = `${`
    <footer class='py-3 my-4'>
      <p class='text-center text-body-secondary my-1'>© 2024 
        <a href='https://www.reddit.com/user/Intelligent-End-9399'>Intelligent-End-9399</a>
      </p>
    </footer>
    `}`;
    return this.innerHTML = template
  }
}