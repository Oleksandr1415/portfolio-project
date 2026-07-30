export interface RoadmapStops {
  headlineBlock: {
    headline: string;
    subheadline: string;
    postHeadline: string;
  };
  description: string;
  variant: 'science' | 'work' | 'germany';
  badges: string[];
  badgesVariant: 'science' | 'work' | 'germany';
}

export const roadmapStops: RoadmapStops[] = [];

export const roadmapStyleList = [];
