interface UserProblem {
    user_id: number;
    problem_id: number;
    mastery: number;
    last_reviewed: string;  // ISO 8601 timestamp
    next_review: string;    // ISO 8601 timestamp
    review_quality: number; // 1 to 5 scale
    repetitions_count: number;
    prior_learning_rate: number;
    learning_rate: number;
    slip_rate: number;
    guess_rate: number;
    ease_factor: number;    // Ease Factor (EF)
    interval: number;       // Previous review interval
  }
  
  function calculateSpacedRepetition(userProblems: UserProblem[]): UserProblem[] {
    const updatedProblems = userProblems.map(problem => {
      // Set default values for missing parameters
      const {
        mastery = 0.5,
        review_quality = 3,
        repetitions_count = 1,
        ease_factor = 2.5,
        interval = 1,
      } = problem;
  
      // Calculate new ease factor (EF)
      const updatedEaseFactor = calculateEaseFactor(ease_factor, review_quality);
      
      // Calculate new interval for the next review
      const updatedInterval = calculateInterval(updatedEaseFactor, repetitions_count, interval);
  
      // Calculate updated repetitions count
      const updatedRepetitionsCount = review_quality >= 3 ? repetitions_count + 1 : 1;
  
      // Update next review date based on the interval
      const nextReviewDate = calculateNextReviewDate(problem.last_reviewed, updatedInterval);
  
      return {
        ...problem,
        mastery,  // Mastery remains the same for this calculation
        ease_factor: updatedEaseFactor,
        interval: updatedInterval,
        repetitions_count: updatedRepetitionsCount,
        next_review: nextReviewDate,
      };
    });
  
    return updatedProblems;
  }
  
  function calculateEaseFactor(easeFactor: number, reviewQuality: number): number {
    // Update the ease factor based on review quality
    let newEaseFactor = easeFactor + (0.1 - (5 - reviewQuality) * (0.08 + (5 - reviewQuality) * 0.02));
    return Math.max(1.3, newEaseFactor);
  }
  
  function calculateInterval(easeFactor: number, repetitionsCount: number, previousInterval: number): number {
    if (repetitionsCount === 1) {
      return 1;  // If it's the first review, interval is set to 1 day
    }
    return previousInterval * easeFactor;
  }
  
  function calculateNextReviewDate(lastReviewed: string, interval: number): string {
    const lastReviewedDate = new Date(lastReviewed);
    lastReviewedDate.setDate(lastReviewedDate.getDate() + interval);
    return lastReviewedDate.toISOString();
  }
  
  // Example usage:
  const userProblems: UserProblem[] = [
    {
      user_id: 1,
      problem_id: 1,
      mastery: 0.7,
      last_reviewed: '2025-01-05T10:00:00',
      next_review: '2025-01-06T10:00:00',
      review_quality: 4,
      repetitions_count: 3,
      prior_learning_rate: 0.5,
      learning_rate: 0.6,
      slip_rate: 0.1,
      guess_rate: 0.2,
      ease_factor: 2.5,
      interval: 1
    }
  ];
  
  const updatedProblems = calculateSpacedRepetition(userProblems);
  console.log(updatedProblems);
  