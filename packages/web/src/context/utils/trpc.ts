import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '@pos-system/server'

export const trpc = createReactQueryHooks<AppRouter>();