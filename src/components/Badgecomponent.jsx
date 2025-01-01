function BadgeComponent({ badges }) { return (
<div>
  <h3>Your Badges</h3>
  <ul>
    {badges.map((badge, index) => (
    <li key="{index}">{badge}</li>
    ))}
  </ul>
</div>
); } export default BadgeComponent;
