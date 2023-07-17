import PropType from 'prop-types'
import { FilterLabel, Icon, InputSearch, SpanFilter } from './Filter.module';
import { svgGood } from './svg/icon';

const Filter = ({ filterValue, filter }) => (
    <FilterLabel > Find contacts by name
        <SpanFilter>
        <InputSearch type="text" value={filterValue} onChange={filter} />
            <Icon>{svgGood}</Icon>
            </SpanFilter>
    </FilterLabel>
)


Filter.propTypes = {
  filterValue: PropType.string.isRequired,
    filter: PropType.func.isRequired,

};
export default Filter;