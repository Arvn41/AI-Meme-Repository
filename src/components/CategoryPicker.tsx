import { CATEGORIES } from '../data/categories.ts'
import type { Category, CategoryId } from '../types.ts'

type CategoryPickerProps = {
  activeCategory: CategoryId | null
  disabled: boolean
  onSelect: (category: CategoryId) => void
}

type CategoryCardProps = {
  category: Category
  active: boolean
  disabled: boolean
  onSelect: (category: CategoryId) => void
}

function CategoryCard({ category, active, disabled, onSelect }: CategoryCardProps) {
  return (
    <button
      type="button"
      className={
        active ? 'category-card category-card--active' : 'category-card'
      }
      disabled={disabled}
      aria-pressed={active}
      onClick={() => onSelect(category.id)}
    >
      <span className="category-card__emoji" aria-hidden="true">
        {category.emoji}
      </span>
      <span className="category-card__label">{category.label}</span>
      <span className="category-card__blurb">{category.blurb}</span>
    </button>
  )
}

export default function CategoryPicker({
  activeCategory,
  disabled,
  onSelect,
}: CategoryPickerProps) {
  return (
    <fieldset className="category-picker" disabled={disabled}>
      <legend className="category-picker__label">Meme categories</legend>
      <div className="category-grid">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            active={category.id === activeCategory}
            disabled={disabled}
            onSelect={onSelect}
          />
        ))}
      </div>
    </fieldset>
  )
}