function skilsMember() {
  return {
    skils: ['HTML', 'CSS', 'JavaScript'],
    getSkils() {
      return this.skils;
    },
    printSkils() {
      console.log(this.skils.join(', '));
    },
  };
}
