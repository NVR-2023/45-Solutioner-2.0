import "./card.css"

type ServiceRollUpProps = {
  id: NumberConstructor;
  category: string;
  service: string;
  description: string;
  unit: string;
  duration: string;
  personnel: number;
  included: string;
  price: string;
};
export const ServiceRollUp = ({
  id,
  category,
  service,
  description,
  unit,
  duration,
  personnel,
  included,
  price,
}: ServiceRollUpProps) => {
  const serviceColorMMap = new Map([
    ["cleaning", "#32CD32"],
    ["wardrobe", "red"],
    ["plumbing", "#AFEEEE"],
    ["electrical", "yellow"],
    ["hvac", "purple"],
    ["security", "#9400D3"],
    ["handyman", "#EE4B2B"],
    ["patching", "yellow"],
    ["gardening", "green"],
    ["extermination", "teal"],
    ["eventing", "purple"],
    ["companionship", "#FF69B5"],
    ["grooming", "navy"],
    ["nursing", "green"],
    ["nannying", "cyan"],
    ["petcare", "brown"],
    ["wellness", "pink"],
  ]);

  // Set store Variables and open Calendar modla
  const handleBookClick = () => {
    alert("clicked");
  };

  // Format props
  service = service.charAt(0).toUpperCase() + service.slice(1);
  description = description.charAt(0).toUpperCase() + description.slice(1);
  unit = unit.charAt(0).toUpperCase() + unit.slice(1);
  included = included.charAt(0).toUpperCase() + included.slice(1);

  const categoryColor = serviceColorMMap.get(category);
  let durationString = "";
  if (parseFloat(duration) < 1) {
    durationString = `${parseInt((parseFloat(duration) * 60).toString())} minutes`;
  } else if (parseFloat(duration) === 1) {
    durationString = "1 hour";
  } else {
    durationString = `${parseFloat(duration)} hours`;
  }
  const priceString = price + ".00€";

  // Main JSX
  return (
    <>
      <div className="serviceRollUp my-1" id={(id).toString()}>
        <div className="serviceRollUpBanner">
          <div
            className="bannerCategoryColorWrapper"
            style={{ backgroundColor: categoryColor }}
          >
            <span
              className="bannerCategoryColor"
              style={{ backgroundColor: categoryColor }}
            >
              &nbsp;
            </span>
          </div>
          <div className="bannerCategoryLabelWrapper">
            <span className="bannerCategoryLabel">{category}</span>
          </div>
          <div className="bannerLabels">
            <span className="bannerLabel1">
              <span className="bannerDescription">service:</span>
              <span className="bannerValue">{service}</span>
            </span>
            <span className="bannerLabel2 d-flex align-items-center">
              <span className="bannerDescription">duration: </span>
              <span className="bannerValue">{durationString}</span>
            </span>
            <span className="bannerLabel3">
              <span className="bannerDescription">price: </span>
              <span className="bannerValue">
                <span className="priceString">{priceString}</span>
              </span>
            </span>
          </div>
          <div className="bookButtonWrapper">
            <div className="bannerLabel4 d-flex align-items-center">
              <button className="bookButton mt-1" onClick={handleBookClick}>
                book
              </button>
            </div>
          </div>
        </div>
        <div className="expandableWrapper" id={"expandableWrapperId" + id}>
          <div className="expandable">
            <div className="expandableContent">
              <div className="expandableColumns">
                <div className="expandableColumn1">
                  <div>
                    <span className="expandableDescription me-1">
                      description:
                    </span>
                    <span className="expandableValue">{description}</span>
                  </div>
                </div>
                <div className="expandableColumn2">
                  <div>
                    <span className="expandableDescription me-1">unit:</span>
                  </div>
                  <div>
                    <span className="expandableDescription me-1">
                      personnel:
                    </span>
                  </div>
                  <div>
                    <span className="expandableDescription me-1">
                      included:
                    </span>
                  </div>
                </div>
                <div className="expandableColumn3">
                  <div>
                    <span className="expandableValue">{unit}</span>
                  </div>
                  <div>
                    <span className="expandableValue">{personnel}</span>
                  </div>
                  <div>
                    <span className="expandableValue">{included}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
