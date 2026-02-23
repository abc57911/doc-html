// 卡片元件
import { CardData } from '../data/types';
import { getSourceClass } from '../utils/category';
import { CARD_ANIMATION_DELAY_BASE, CARD_ANIMATION_MAX_ITEMS } from '../styles/constants';

interface CardProps {
  data: CardData;
  index?: number;
}

export function Card({ data, index = 0 }: CardProps) {
  return (
    <div
      className="card"
      data-type={data.category}
      style={{ animationDelay: `${Math.min(index, CARD_ANIMATION_MAX_ITEMS) * CARD_ANIMATION_DELAY_BASE}s` }}
    >
      <div className="card-header">
        <span className="card-title">{data.title}</span>
        <div className="card-header-meta">
          <span className={`card-type ${data.category}`}>
            {data.category === 'agent' ? 'Agent' : data.category === 'skill' ? 'Skill' : 'Tool'}
          </span>
          {data.source && (
            <span className={`card-source ${getSourceClass(data.source)}`}>
              {data.source}
            </span>
          )}
        </div>
      </div>
      <div className="card-body">
        <p className="card-description">{data.description}</p>
        {data.tags && data.tags.length > 0 && (
          <div className="card-tools">
            {data.tags.map((tag) => (
              <span key={tag} className="tool-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
