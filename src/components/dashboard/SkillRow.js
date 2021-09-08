import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const getSkillLevelDescription = (skillLevelOptions, skillLevel) => {
  const skillLevelOption = skillLevelOptions.find((option) => option.id === skillLevel);
  return skillLevelOption?.description;
};

const SkillRow = ({ row, skillLevelOptions }) => (
  <TableRow hover tabIndex={-1}>
    <TableCell>
      {row.theme.title}
    </TableCell>
    <TableCell>
      {row.learning_outcome}
    </TableCell>
    <TableCell>
      {row.apprenticeship_level}
    </TableCell>
    <TableCell>
      {getSkillLevelDescription(skillLevelOptions, row.skills_level)}
    </TableCell>
  </TableRow>
);

SkillRow.defaultProps = {
  row: {},
  skillLevelOptions: [{}],
};

export default SkillRow;
