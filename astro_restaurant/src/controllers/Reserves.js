import Base from './Base';

class Reserves extends Base {
  constructor() {
    super();
  }

  async postReserva(data) {
    const response = await fetch(`${this.url}/reserves`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}

export default Reserves;
