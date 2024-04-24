export default class Counter {
  constructor(props) {
    this.title = props.block.innerHTML;
    this.id = props.block.id;
  }
};
