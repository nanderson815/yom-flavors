export interface CardProps {
    title?: string;
    tags?: string[];
    children?: any;
    className?: string;
}

const Card = ({ title, tags, children, className
}: CardProps) => (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg ${className}`}>
        <div>
            {title && <div className="font-bold text-xl mb-2">{title}</div>}
            {children}
        </div>
        {tags && <div className="px-2 pt-4 pb-2">
            {tags.map(tag => (
                <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            ))}
        </div>}
    </div>
)

export default Card;