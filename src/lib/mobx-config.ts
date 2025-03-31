import { configure } from 'mobx';

configure({
  enforceActions: 'never',
  computedRequiresReaction: false,
  reactionRequiresObservable: false,
  observableRequiresReaction: false,
  useProxies: 'never',
  disableErrorBoundaries: true,
});
