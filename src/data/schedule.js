// Color codes for categories
export const categoryColors = {
  STRENGTH: 'border-l-gold',
  HIIT: 'border-l-orange-500',
  CARDIO: 'border-l-blue-500',
  YOGA: 'border-l-emerald-500',
  COMBAT: 'border-l-red-500',
};

export const categoryDots = {
  STRENGTH: 'bg-gold',
  HIIT: 'bg-orange-500',
  CARDIO: 'bg-blue-500',
  YOGA: 'bg-emerald-500',
  COMBAT: 'bg-red-500',
};

export const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export const schedule = {
  MON: [
    { time: '06:00', name: 'POWERLIFTING FUNDAMENTALS', trainer: 'Marcus Steel', duration: '75 min', spots: 4, category: 'STRENGTH' },
    { time: '08:00', name: 'CARDIO BLAST', trainer: 'Sara Khan', duration: '50 min', spots: 12, category: 'CARDIO' },
    { time: '12:00', name: 'HIIT INFERNO', trainer: 'Sara Khan', duration: '45 min', spots: 0, category: 'HIIT' },
    { time: '17:30', name: 'OLYMPIC LIFTING', trainer: 'Ali Raza', duration: '90 min', spots: 6, category: 'STRENGTH' },
    { time: '19:00', name: 'COMBAT FITNESS', trainer: 'Ali Raza', duration: '60 min', spots: 3, category: 'COMBAT' },
    { time: '20:30', name: 'YOGA & RECOVERY', trainer: 'Sara Khan', duration: '60 min', spots: 8, category: 'YOGA' },
  ],
  TUE: [
    { time: '06:30', name: 'HIIT INFERNO', trainer: 'Sara Khan', duration: '45 min', spots: 5, category: 'HIIT' },
    { time: '09:00', name: 'POWERLIFTING FUNDAMENTALS', trainer: 'Marcus Steel', duration: '75 min', spots: 7, category: 'STRENGTH' },
    { time: '12:00', name: 'CARDIO BLAST', trainer: 'Sara Khan', duration: '50 min', spots: 14, category: 'CARDIO' },
    { time: '17:00', name: 'COMBAT FITNESS', trainer: 'Ali Raza', duration: '60 min', spots: 2, category: 'COMBAT' },
    { time: '19:00', name: 'OLYMPIC LIFTING', trainer: 'Ali Raza', duration: '90 min', spots: 0, category: 'STRENGTH' },
    { time: '20:30', name: 'YOGA & RECOVERY', trainer: 'Sara Khan', duration: '60 min', spots: 10, category: 'YOGA' },
  ],
  WED: [
    { time: '06:00', name: 'OLYMPIC LIFTING', trainer: 'Ali Raza', duration: '90 min', spots: 5, category: 'STRENGTH' },
    { time: '08:00', name: 'YOGA & RECOVERY', trainer: 'Sara Khan', duration: '60 min', spots: 9, category: 'YOGA' },
    { time: '12:00', name: 'HIIT INFERNO', trainer: 'Sara Khan', duration: '45 min', spots: 3, category: 'HIIT' },
    { time: '17:30', name: 'POWERLIFTING FUNDAMENTALS', trainer: 'Marcus Steel', duration: '75 min', spots: 6, category: 'STRENGTH' },
    { time: '19:00', name: 'COMBAT FITNESS', trainer: 'Ali Raza', duration: '60 min', spots: 4, category: 'COMBAT' },
    { time: '20:30', name: 'CARDIO BLAST', trainer: 'Sara Khan', duration: '50 min', spots: 11, category: 'CARDIO' },
  ],
  THU: [
    { time: '06:30', name: 'POWERLIFTING FUNDAMENTALS', trainer: 'Marcus Steel', duration: '75 min', spots: 8, category: 'STRENGTH' },
    { time: '09:00', name: 'CARDIO BLAST', trainer: 'Sara Khan', duration: '50 min', spots: 13, category: 'CARDIO' },
    { time: '12:30', name: 'HIIT INFERNO', trainer: 'Sara Khan', duration: '45 min', spots: 0, category: 'HIIT' },
    { time: '17:00', name: 'OLYMPIC LIFTING', trainer: 'Ali Raza', duration: '90 min', spots: 4, category: 'STRENGTH' },
    { time: '19:00', name: 'COMBAT FITNESS', trainer: 'Ali Raza', duration: '60 min', spots: 1, category: 'COMBAT' },
    { time: '20:30', name: 'YOGA & RECOVERY', trainer: 'Sara Khan', duration: '60 min', spots: 7, category: 'YOGA' },
  ],
  FRI: [
    { time: '06:00', name: 'HIIT INFERNO', trainer: 'Sara Khan', duration: '45 min', spots: 6, category: 'HIIT' },
    { time: '08:30', name: 'POWERLIFTING FUNDAMENTALS', trainer: 'Marcus Steel', duration: '75 min', spots: 5, category: 'STRENGTH' },
    { time: '12:00', name: 'CARDIO BLAST', trainer: 'Sara Khan', duration: '50 min', spots: 12, category: 'CARDIO' },
    { time: '17:30', name: 'COMBAT FITNESS', trainer: 'Ali Raza', duration: '60 min', spots: 3, category: 'COMBAT' },
    { time: '19:00', name: 'OLYMPIC LIFTING', trainer: 'Ali Raza', duration: '90 min', spots: 5, category: 'STRENGTH' },
    { time: '20:30', name: 'YOGA & RECOVERY', trainer: 'Sara Khan', duration: '60 min', spots: 8, category: 'YOGA' },
  ],
  SAT: [
    { time: '07:00', name: 'POWERLIFTING FUNDAMENTALS', trainer: 'Marcus Steel', duration: '75 min', spots: 9, category: 'STRENGTH' },
    { time: '09:00', name: 'HIIT INFERNO', trainer: 'Sara Khan', duration: '45 min', spots: 7, category: 'HIIT' },
    { time: '11:00', name: 'COMBAT FITNESS', trainer: 'Ali Raza', duration: '60 min', spots: 5, category: 'COMBAT' },
    { time: '14:00', name: 'OLYMPIC LIFTING', trainer: 'Ali Raza', duration: '90 min', spots: 6, category: 'STRENGTH' },
    { time: '17:00', name: 'CARDIO BLAST', trainer: 'Sara Khan', duration: '50 min', spots: 0, category: 'CARDIO' },
    { time: '19:00', name: 'YOGA & RECOVERY', trainer: 'Sara Khan', duration: '60 min', spots: 11, category: 'YOGA' },
  ],
  SUN: [
    { time: '08:00', name: 'YOGA & RECOVERY', trainer: 'Sara Khan', duration: '60 min', spots: 10, category: 'YOGA' },
    { time: '10:00', name: 'CARDIO BLAST', trainer: 'Sara Khan', duration: '50 min', spots: 14, category: 'CARDIO' },
    { time: '12:00', name: 'HIIT INFERNO', trainer: 'Sara Khan', duration: '45 min', spots: 6, category: 'HIIT' },
    { time: '15:00', name: 'POWERLIFTING FUNDAMENTALS', trainer: 'Marcus Steel', duration: '75 min', spots: 8, category: 'STRENGTH' },
    { time: '17:30', name: 'COMBAT FITNESS', trainer: 'Ali Raza', duration: '60 min', spots: 4, category: 'COMBAT' },
  ],
};
