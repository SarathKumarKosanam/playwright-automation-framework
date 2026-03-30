export class DataGenerator {
  static randomString(length: number = 6): string {
    return Math.random().toString(36).substring(2, length + 2);
  }

  static randomEmail(): string {
    return `test_${this.randomString()}@sdet.com`;
  }

  static randomJob(): string {
    const jobs = ['SDET', 'QA Engineer', 'Automation Engineer', 'Test Lead'];
    return jobs[Math.floor(Math.random() * jobs.length)];
  }

  static createUserPayload() {
    return {
      name: `Test User ${this.randomString()}`,
      job: this.randomJob(),
    };
  }
}