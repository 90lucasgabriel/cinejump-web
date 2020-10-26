export default interface Response {
  cast: [
    {
      castId: number;
      character: string;
      creditId: string;
      gender?: number;
      id: number;
      name: string;
      order: number;
      profilePath?: string;
    },
  ];
  crew: [
    {
      creditId: string;
      department: string;
      gender?: number;
      id: number;
      job: string;
      name: string;
      profilePath?: string;
    },
  ];
}
