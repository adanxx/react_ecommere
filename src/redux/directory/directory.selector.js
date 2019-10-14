import {createSelector} from 'reselect';

const selectDictory = state => state.directory;

export const selectDirectorSection = createSelector(
    [selectDictory],
    directory => directory.sections
);