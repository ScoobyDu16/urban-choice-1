'use client';

import { useEffect } from 'react';
import { pushGTMEvent } from '@/lib/analytics';
import { GTM_EVENTS } from '@/constants';

interface CategoryViewTrackerProps {
  categoryId: string;
  categoryName: string;
}

export default function CategoryViewTracker({
  categoryId,
  categoryName,
}: CategoryViewTrackerProps) {
  useEffect(() => {
    pushGTMEvent(GTM_EVENTS.CATEGORY_VIEW, {
      category_id: categoryId,
      category_name: categoryName,
    });
  }, [categoryId, categoryName]);

  return null;
}
